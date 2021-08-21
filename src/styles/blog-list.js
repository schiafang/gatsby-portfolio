import styled from 'styled-components'

export const PostListWrapper = styled.div`
    height: 100%;
    overflow: auto;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 1rem 0;
    padding: 3rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 3rem;
    }

    @media screen and (min-width: 1040px) {
        padding: 4rem 6rem;
    }

    .back-icon {
        display: block;
        color: ${props => props.theme.gray};
        cursor: pointer;
        font-size: 1.6rem;
        transition: all 0.4s ease;
        margin-bottom: 1rem;

        &:hover {
            color: ${props => props.theme.green};
            transform: scale(1.1);
        }
    }

    .target-tag-result {
        font-size: 2rem;
        margin: 0 5px 30px 0;
        font-weight: 600;
        display: inline-block;

        &::after {
            display: inherit;
            color: inherit;
            content: '';
            margin: 0 1rem 0 0.8rem;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 0 8px 10px;
            border-color: transparent transparent transparent
                ${props => props.theme.primary};
            position: relative;
            transform: translateX(50%);
        }

        + span {
            font-size: 2rem;
            font-weight: 600;
            color: ${props => props.theme.green};
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
            margin: 0 10px;
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
