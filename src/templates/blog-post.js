import React from 'react'
import { graphql, navigate, Link } from 'gatsby'
import { PostMainContent } from '../styles/blog-post'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <PostMainContent>
            <Icon
                icon={faArrowAltCircleLeft}
                className="back-icon"
                onClick={() =>
                    !window.previousPath ? navigate('/list/1') : navigate(-1)
                }
            />

            <h1>{post.frontmatter.title}</h1>
            <span className="post-info">
                <span>
                    {post.frontmatter.date} <span className="dot"></span>
                    {post.fields.readingTime.text}
                </span>
                <div>
                    {post.frontmatter.tags.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={`/tag/${item.toLowerCase()}/1`}
                            >
                                <span className="post-tag">{item}</span>
                            </Link>
                        )
                    })}
                </div>
            </span>
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
                date(formatString: "MMMM DD YYYY")
                description
                tags
            }
            fields {
                readingTime {
                    text
                }
            }
        }
    }
`

export default BlogPostTemplate
