const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
    const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)
    const tagPosts = path.resolve(`./src/templates/tag-posts.js`)

    const { createPage } = actions
    const perPageNum = 5

    try {
        const blogPostsQuery = await graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `)

        if (blogPostsQuery.errors) throw blogPostsQuery.errors

        const posts = blogPostsQuery.data.allMarkdownRemark.edges

        // Post page
        posts.forEach(({ node }) => {
            createPage({
                path: `/blog${node.fields.slug}`,
                component: blogPostTemplate,
                context: {
                    id: node.id,
                    slug: node.fields.slug,
                },
            })
        })

        // Posts pages
        const numOfPages = Math.ceil(posts.length / perPageNum)

        Array.from({ length: numOfPages }).forEach((_, i) => {
            createPage({
                path: `list/${i + 1}`,
                component: blogListTemplate,
                context: {
                    limit: perPageNum,
                    skip: i * perPageNum,
                    numOfPages,
                    currentPage: i + 1,
                },
            })
        })

        // Tag posts pages
        const tagPostsQuery = await graphql(`
            {
                allMarkdownRemark {
                    nodes {
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        `)

        if (tagPostsQuery.errors) throw tagPostsQuery.errors

        const nodes = tagPostsQuery.data.allMarkdownRemark.nodes
        const tagMap = new Map()

        nodes.forEach(node => {
            const nodeTags = node.frontmatter.tags
            if (nodeTags) {
                nodeTags.forEach(tag =>
                    tagMap.set(tag, tagMap.has(tag) ? tagMap.get(tag) + 1 : 1)
                )
            }
        })

        tagMap.forEach((numOfNodes, tag) => {
            const numOfTagPages = Math.ceil(numOfNodes / perPageNum)

            Array.from({ length: numOfTagPages }).forEach((_, i) => {
                createPage({
                    path: `tag/${tag.toLowerCase()}/${i + 1}`,
                    component: tagPosts,
                    context: {
                        limit: perPageNum,
                        skip: i * perPageNum,
                        numOfTagPages,
                        currentPage: i + 1,
                        tag,
                    },
                })
            })
        })
    } catch (error) {
        console.warn(error)
    }
}
