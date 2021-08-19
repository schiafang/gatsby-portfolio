import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import NavMenus from './nav-menus'
import { darkTheme, lightTheme } from '../themes/theme'
import * as S from '../styles/layout'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <S.Wrapper>
                <S.Header>
                    <Link to="/">
                        <h3>{data.site.siteMetadata?.title} </h3>
                    </Link>
                    <NavMenus
                        isDark={isDark}
                        setIsDark={() => setIsDark(pre => !pre)}
                    />
                </S.Header>
                {children}
                <S.Footer>
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
            </S.Wrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
