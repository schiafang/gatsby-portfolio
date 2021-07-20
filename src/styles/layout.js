import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem 7.5rem;

    @media ${props => props.theme.breakpoints.tablet} {
        padding: 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 0 1rem;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${props => props.theme.breakpoints.tablet} {
        padding: 15px 0;
    }

    .theme-toggle {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: 10px;

        svg {
            width: 20px;
        }

        .toggler-moon {
            fill: ${props => props.theme.yellow};
        }

        .toggler-sun {
            fill: ${props => props.theme.mainColor};
        }
    }

    > div {
        display: flex;
        align-items: center;
        font-size: 0.9rem;

        span {
            margin: 0 10px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export const Main = styled.main`
    flex: 1 0;
`

export const Footer = styled.footer``
