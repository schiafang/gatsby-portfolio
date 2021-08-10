import React from 'react'
import { graphql, Link } from 'gatsby'

const Tags = ({ data }) => {
    const nodes = data.allMarkdownRemark.edges
    const tagsMap = new Map()

    nodes.forEach(edge => {
        const nodeTags = edge.node.frontmatter.tags
        nodeTags &&
            nodeTags.forEach(tag =>
                tagsMap.set(tag, tagsMap.has(tag) ? tagsMap.get(tag) + 1 : 1)
            )
    })

    return (
        <>
            {Array.from(tagsMap).map((tag, index) => {
                const [tagName, tagCount] = tag
                return (
                    <Link key={index} to={`/tag/${tagName.toLowerCase()}/1`}>
                        <span>
                            {tagName}, {tagCount}
                        </span>
                    </Link>
                )
            })}
        </>
    )
}

export default Tags

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        tags
                    }
                }
            }
        }
    }
`
