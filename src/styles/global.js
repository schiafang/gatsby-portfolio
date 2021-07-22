import { css, createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    ${css`
        body {
            margin: 0;
            padding: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.56;
            letter-spacing: 0.9px;
            color: ${props => props.theme.mainColor};
            background: ${props => props.theme.mainBackground};
        }

        * {
            ::selection {
                background: ${props => props.theme.green};
            }
        }

        #gatsby-focus-wrapper {
            flex-grow: 1;
        }
    `}
`
