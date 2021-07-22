import React from 'react'
import { graphql } from 'gatsby'
import { PostMainContent } from '../styles/blog-post'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <PostMainContent>
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <span className="post-date">{post.frontmatter.date}</span>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostMainContent>
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
