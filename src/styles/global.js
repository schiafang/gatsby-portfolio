import { css, createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    ${css`
        html {
            font-size: 14px;
            @media screen and (min-width: 768px) {
                font-size: 16px;
            }
            @media screen and (min-width: 1040px) {
                font-size: 18px;
            }
        }
        body {
            line-height: 1.15;
            letter-spacing: 0.9px;
            color: ${props => props.theme.primary};
            background: ${props => props.theme.bg};
            @media screen and (min-width: 768px) {
                line-height: 1.34;
            }
            @media screen and (min-width: 1040px) {
                line-height: 1.56;
            }
        }
        * {
            ::selection {
                background: ${props => props.theme.green};
            }
        }
        #gatsby-focus-wrapper {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            max-width: 100vw;
            min-height: 100vh;
            padding: 1rem;
            overflow: hidden;

            @media screen and (min-width: 768px) {
                padding: 1rem 2rem;
            }

            @media screen and (min-width: 1040px) {
                padding: 1rem 7.5rem;
            }
        }
    `}
`
