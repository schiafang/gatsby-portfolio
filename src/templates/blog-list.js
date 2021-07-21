import React from 'react'
import { graphql, Link } from 'gatsby'
import { PostListWrapper } from '../styles/blog-list'

const BlogListTemplate = ({ data, pageContext, ...props }) => {
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numOfPages } = pageContext
    console.log({ props })

    return (
        <PostListWrapper>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title
                return (
                    <article key={node.id} style={{ margin: '45px 0' }}>
                        <header>
                            <h3>
                                <Link to={`/blog${node.fields.slug}`}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                )
            })}
            {currentPage !== 1 && (
                <Link to={`/list/${currentPage - 1}`}>pre</Link>
            )}
            {currentPage !== numOfPages && (
                <Link to={`/list/${currentPage + 1}`}>next</Link>
            )}
        </PostListWrapper>
    )
}

export const query = graphql`
    query pageQuery($limit: Int!, $skip: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        description
                    }
                    id
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 1000)
                }
            }
        }
    }
`

export default BlogListTemplate
