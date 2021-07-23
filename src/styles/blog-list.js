import styled from 'styled-components'

export const PostListWrapper = styled.div`
    height: 100%;
    overflow: auto;

    article {
        margin: 3rem 0;
    }

    header {
        margin-bottom: 1rem;
    }

    .title {
        color: ${props => props.theme.mainColor};
        font-size: 1.4rem;
        text-decoration: none;
    }

    .category-tag {
        border: 1px solid ${props => props.theme.yellow}60;
        border-radius: 2px;
        font-size: 0.8rem;
        color: ${props => props.theme.mainColor}90;
        background-image: ${props => {
            const direction = '100deg'
            const color = props.theme.yellow
            return `linear-gradient(${direction}, ${color}40,  ${color}60)`
        }};
        background-repeat: no-repeat;
        background-size: 100% 0.45em;
        background-position: 0 88%;
        padding: 0 3px;
        margin: 0 5px;
    }

    .date {
        font-size: 0.7rem;
        color: ${props => props.theme.red}95;
    }

    .excerpt {
        color: ${props => props.theme.mainColor}75;
        word-wrap: break-word;
    }

    .page-link {
        background-color: yellowgreen;
    }
`

export const PostPageLink = styled.div`
    margin-bottom: 10rem;
    position: relative;

    a {
        text-decoration: none;
        color: ${props => props.theme.mainColor};
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
            border-top: 2px solid ${props => props.theme.mainColor};
            border-right: 2px solid ${props => props.theme.mainColor};
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
