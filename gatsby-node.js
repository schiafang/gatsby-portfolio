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

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
    const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)

    return graphql(`
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
    `).then(result => {
        if (result.errors) throw result.errors
        const posts = result.data.allMarkdownRemark.edges

        // Post pages
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

        // Post list pages
        const perPageNum = 5
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
    })
}
