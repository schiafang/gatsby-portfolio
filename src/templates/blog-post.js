import React from 'react'
import { graphql } from 'gatsby'
import PostStyle from '../styles/post'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <>
            <h1
                style={{
                    marginBottom: 0,
                }}
            >
                {post.frontmatter.title}
            </h1>
            <p
                style={{
                    display: `block`,
                }}
            >
                {post.frontmatter.date}
            </p>
            <PostStyle>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </PostStyle>
        </>
    )
}

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                categories
            }
        }
    }
`

export default BlogPostTemplate
