import { css, createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    ${css`
        html {
            font-size: 14px;
            @media ${props => props.theme.breakpoints.tablet} {
                font-size: 16px;
            }
            @media ${props => props.theme.breakpoints.desktop} {
                font-size: 18px;
            }
        }
        body {
            line-height: 1.56;
            letter-spacing: 0.9px;
            color: ${props => props.theme.primary};
            background: ${props => props.theme.bg};
        }
        * {
            ::selection {
                background: ${props => props.theme.green};
            }
        }
    `}
`
