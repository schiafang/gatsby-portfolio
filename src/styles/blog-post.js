import styled from 'styled-components'

export const PostMainContent = styled.main`
    margin: 1rem 0;
    padding: 3rem 1rem;
    color: ${props => props.theme.primary};
    background-color: ${({ theme }) => theme.bg};
    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco',
        'Helvetica Neue', Helvetica, Arial, sans-serif;

    @media screen and (min-width: 768px) {
        padding: 3rem;
    }

    @media screen and (min-width: 1040px) {
        padding: 4rem 6rem;
    }

    .back-icon {
        color: ${props => props.theme.gray};
        cursor: pointer;
        font-size: 1.6rem;
        margin-bottom: 1rem;
        transition: all 0.4s ease;
        &:hover {
            color: ${props => props.theme.green};
            transform: scale(1.1);
        }
    }

    .post-info {
        display: flex;
        flex-direction: column;
        color: ${props => props.theme.grayLight};
        font-size: 0.85rem;
        margin: 1rem 0 3rem 0;

        @media screen and (min-width: 768px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }

        > * {
            margin: 5px 0;
        }

        > span:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 0.5rem;

            .dot {
                width: 3px;
                height: 3px;
                margin: 0 0.5rem;
                display: inline-block;
                border-radius: 50%;
                background-color: ${props => props.theme.grayLight};
            }
        }

        > div:nth-child(2) {
            .post-tag {
                display: inline-block;
                width: fit-content;
                padding: 0 5px;
                margin-right: 0.5rem;
            }
        }
    }

    .post-tag {
        padding: 0 5px;
        border-radius: 3px;
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.green}80;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
    }
    p {
        margin-top: 2rem;
        line-height: 1.756;
        letter-spacing: -0.003em;
    }
    a {
        text-decoration: underline;
    }
    strong {
        font-weight: 700;
    }
    em {
        font-style: italic;
    }
    del {
        text-decoration: line-through;
    }
    blockquote {
        font-family: Merriweather, Georgia, serif;
        font-size: 1.1rem;
        color: ${props => props.theme.gray};
        border-left: 5px solid #ddd;
        margin: 30px 0;
    }
    blockquote p {
        font-style: italic;
        padding: 5px 20px;
    }
    ol,
    ul {
        margin: 1rem 2rem;
    }
    ol {
        display: block;
        list-style-type: decimal;
    }
    ul {
        display: list-item;
        list-style-type: disc;
    }
    li {
        margin: 0.25rem 0;
    }
    hr {
        border: 0;
        height: 1px;
        background: #eee;
        margin-top: 2rem;
    }
    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    thead {
        background-color: #eee;
        border: none;
    }
    th {
        font-weight: 700;
        color: #333;
        background-color: ${props => props.theme.yellow}50;
    }
    table,
    th,
    td {
        border: 1px solid ${props => props.theme.primary}30;
    }
    th,
    td {
        padding: 0.5rem;
    }
`
