import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {
    css,
    createGlobalStyle,
    ThemeProvider,
    // ThemeContext,
} from 'styled-components'

// import Header from './header'
import './reset.css'

// const MyComponent = () => {
//     const themeContext = useContext(ThemeContext)

//     React.useEffect(() => {
//         console.log('Current theme: ', themeContext)
//     })
//     return <></>
// }

const theme = {
    green: '#49c5b6',
    red: '#D14836',
    yellow: '#ECD06F',
    main: 'pink',
}

const GlobalStyle = createGlobalStyle`
    ${css`
        body {
            margin: 0;
            padding: 0;
            background: #f2efe7;
            /* color: rgba(33,33,33,.9); */
            font-family: Chivo;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.56;
            letter-spacing: 0.9px;
            color: ${props => props.theme.main};
            font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
        }

        * {
            ::selection {
                background: ${props => props.theme.green};
            }
        }

        h1 {
            font-weight: 400;
            color: #2f333f;
            font-family: colfax, -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1;
            font-size: calc(20.4px + 3.3vw);
            margin: 0 0 calc(18.4px + 1.8vw);
        }
    `}
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
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
            <h1>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </h1>
            <main>{children}</main>
            <footer>footer</footer>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
