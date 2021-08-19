import React from 'react'
import { graphql, Link } from 'gatsby'
import { PostListWrapper, PostPageLink } from '../styles/blog-list'

const TagPost = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numOfTagPages } = pageContext

    return (
        <>
            <PostListWrapper>
                <div className="target-tag-result">Post for tag</div>
                <span>{pageContext.tag}</span>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title
                    return (
                        <article key={node.id}>
                            <Link
                                to={`/blog${node.fields.slug}`}
                                className="title"
                            >
                                <header>
                                    <h2>{title}</h2>
                                </header>
                                <section>
                                    <p
                                        className="excerpt"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                node.frontmatter.description ||
                                                node.excerpt,
                                        }}
                                    />
                                </section>
                            </Link>
                        </article>
                    )
                })}
                <PostPageLink>
                    {currentPage !== 1 && (
                        <Link
                            to={`/tag/${pageContext.tag.toLowerCase()}/${
                                currentPage - 1
                            }`}
                            className="pre-page"
                        >
                            Previous
                        </Link>
                    )}
                    {currentPage !== numOfTagPages && (
                        <Link
                            to={`/tag/${pageContext.tag.toLowerCase()}/${
                                currentPage + 1
                            }`}
                            className="next-page"
                        >
                            Next
                        </Link>
                    )}
                </PostPageLink>
            </PostListWrapper>
        </>
    )
}

export default TagPost

export const pageQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { eq: $tag } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    id
                    excerpt(truncate: true)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`
