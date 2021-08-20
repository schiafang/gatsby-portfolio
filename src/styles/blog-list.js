import styled from 'styled-components'

export const PostListWrapper = styled.div`
    height: 100%;
    overflow: auto;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
        padding: 0 3rem;
    }

    @media screen and (min-width: 1040px) {
        padding: 0 6rem;
    }

    .target-tag-result {
        font-size: 1.2rem;
        margin: 0 5px 45px 0;
        font-weight: 600;
        color: ${props => props.theme.gray};
        display: inline-block;

        &::after {
            display: inherit;
            color: inherit;
            content: '';
            margin: 0 0.8rem;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 6px 0 6px 8px;
            border-color: transparent transparent transparent
                ${props => props.theme.gray};
            position: relative;
            transform: translateX(50%);
        }

        + span {
            font-size: 1.2rem;
            font-weight: 600;
            color: ${props => props.theme.red};
        }
    }

    article {
        margin: 1.5rem 0;
        padding: 15px 20px;
        border-radius: 6px;
        background-color: ${props => props.theme.grayLight}10;
        letter-spacing: 1.3px;
        line-height: 1.4;

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
