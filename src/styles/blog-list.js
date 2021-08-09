import styled from 'styled-components'

export const PostListWrapper = styled.div`
    height: 100%;
    overflow: auto;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-top: 3rem;

    @media ${props => props.theme.breakpoints.tablet} {
        padding: 0 3rem;
    }

    @media ${props => props.theme.breakpoints.desktop} {
        padding: 0 6rem;
    }

    article {
        margin: 1.5rem 0;
        padding: 15px 20px;
        border-radius: 6px;
        background-color: ${props => props.theme.grayLight}10;

        &:hover {
            background-color: ${props => props.theme.grayLight}30;
        }
    }

    header {
        margin-bottom: 1rem;
    }

    .title {
        color: ${props => props.theme.primary};
        font-size: 0.8rem;
        text-decoration: none;
    }

    .category-tag {
        border-radius: 2px;
        font-size: 0.8rem;
        color: ${props => props.theme.primary}90;
        background-image: ${props => {
            const direction = '145deg'
            const color = props.theme.yellow
            return `linear-gradient(${direction}, ${color}70,  ${color}30)`
        }};
        background-repeat: no-repeat;
        background-size: 100% 0.45em;
        background-position: 0 88%;
        padding: 0 3px;
        margin: 0 5px;
    }

    .excerpt {
        font-size: 1rem;
        color: ${props => props.theme.primary}75;
        word-wrap: break-word;
    }
`

export const PostPageLink = styled.div`
    margin-bottom: 10rem;
    position: relative;

    a {
        text-decoration: none;
        color: ${props => props.theme.primary};
        font-weight: 700;
        position: absolute;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        transition: all 0.2s ease;

        &.next-page {
            right: 0;
        }

        &.pre-page::before,
        &.next-page::after {
            content: '';
            display: block;
            width: 0.4em;
            height: 0.4em;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            border-top: 2px solid ${props => props.theme.primary};
            border-right: 2px solid ${props => props.theme.primary};
        }

        &.pre-page::before {
            transform: rotate(-135deg);
        }

        &.next-page::after {
            transform: rotate(45deg);
        }

        &:hover {
            background-color: ${props => props.theme.green}80;
        }
    }
`
