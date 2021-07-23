import React from 'react'
import { graphql, Link } from 'gatsby'
import { PostListWrapper, PostPageLink } from '../styles/blog-list'

const BlogListTemplate = ({ data, pageContext, ...props }) => {
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numOfPages } = pageContext
    console.log({ posts })

    return (
        <PostListWrapper>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title
                return (
                    <article key={node.id}>
                        <header>
                            <Link
                                to={`/blog${node.fields.slug}`}
                                className="title"
                            >
                                {title}
                            </Link>
                            {node.frontmatter.categories.map((item, index) => {
                                return (
                                    <span key={index} className="category-tag">
                                        {item}
                                    </span>
                                )
                            })}
                            <div></div>
                            <small className="date">
                                {node.frontmatter.date}
                            </small>
                        </header>
                        <section>
                            <p
                                className="excerpt"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        // node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                )
            })}
            <PostPageLink>
                {currentPage !== 1 && (
                    <Link to={`/list/${currentPage - 1}`} className="pre-page">
                        Previous
                    </Link>
                )}
                {currentPage !== numOfPages && (
                    <Link to={`/list/${currentPage + 1}`} className="next-page">
                        Next
                    </Link>
                )}
            </PostPageLink>
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
                        date(formatString: "MM/DD/YY")
                        description
                        categories
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
