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

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: `/blog${node.fields.slug}`,
                component: blogPostTemplate,
                context: {
                    id: node.id,
                    slug: node.fields.slug,
                },
            })
        })
    })
}
