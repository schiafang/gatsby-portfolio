import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const HeaderStyle = styled.header`
    a {
        text-decoration: none;
        color: #333;
    }
`

const MainStyle = styled.main`
    background-color: coral;
    flex: 1 0;
`

const FooterStyle = styled.footer`
    background-color: cornsilk;
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <LayoutWrapper>
            <HeaderStyle>
                <Link to="/">
                    <h1>{data.site.siteMetadata?.title} </h1>
                </Link>
            </HeaderStyle>
            <MainStyle>{children}</MainStyle>
            <FooterStyle>footer</FooterStyle>
        </LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
