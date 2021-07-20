import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { darkTheme, lightTheme } from '../themes/theme'
import * as S from '../styles/layout'
import IconMoon from '../images/moon.svg'
import IconDay from '../images/sun.svg'

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

    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle theme={isDark ? darkTheme : lightTheme} />
            <S.Wrapper>
                <S.Header>
                    <Link to="/">
                        <h2>{data.site.siteMetadata?.title} </h2>
                    </Link>

                    <div>
                        <button
                            className="theme-toggle"
                            aria-label="theme-toggle"
                            onClick={() => setIsDark(pre => !pre)}
                        >
                            {isDark ? (
                                <IconMoon className="toggler-moon" />
                            ) : (
                                <IconDay className="toggler-sun" />
                            )}
                        </button>
                        <Link to="/blog">ARTICLE</Link>
                        <span>/</span>
                        <Link to="/blog">RESUME</Link>
                    </div>
                </S.Header>
                <S.Main>{children}</S.Main>
                <S.Footer>footer</S.Footer>
            </S.Wrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
