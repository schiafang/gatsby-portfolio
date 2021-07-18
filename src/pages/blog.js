import React from 'react'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <>
            <h1>Blog List</h1>
            <div>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <Link to={`/blog${node.fields.slug}`} key={node.id}>
                            <div
                                style={{
                                    border: '1px solid #000',
                                    margin: '10px',
                                    padding: '10px',
                                }}
                            >
                                <h2>{node.frontmatter.title}</h2>
                                <span>{node.frontmatter.date}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default BlogPage

export const query = graphql`
    query {
        allMarkdownRemark {
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
                }
            }
        }
    }
`
