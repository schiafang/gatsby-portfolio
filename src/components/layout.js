import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import NavMenus from './nav-menus'
import { darkTheme, lightTheme } from '../themes/theme'
import * as S from '../styles/layout'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import netlifyIdentity from 'netlify-identity-widget'

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? darkTheme : lightTheme

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    useEffect(() => {
        netlifyIdentity.init({})
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <div>
                <S.Header>
                    <h3>{data.site.siteMetadata?.title}</h3>
                    <NavMenus
                        isDark={isDark}
                        setIsDark={() => setIsDark(pre => !pre)}
                    />
                </S.Header>
                <main> {children}</main>
                <S.Footer>
                    <span
                        className="admin-btn"
                        onClick={() => netlifyIdentity.open()}
                    >
                        Admin
                    </span>
                    <p>2021 CAREY SUNG</p>
                    <a href="https://github.com/schiafang" target="_blank">
                        <Icon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carey-sung/"
                        target="_blank"
                    >
                        <Icon icon={faLinkedinIn} />
                    </a>
                </S.Footer>
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
