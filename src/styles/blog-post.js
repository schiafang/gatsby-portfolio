import styled from 'styled-components'

export const PostMainContent = styled.main`
    margin: 1rem 0;
    padding: 4rem 6rem;
    background-color: ${({ theme }) => theme.mainBackground};

    .post-date {
        display: block;
        color: #888;
        text-align: right;
        font-size: 0.85rem;
        margin-bottom: 3rem;
    }
    .post-title {
        color: ${props => props.theme.green};
    }
    h1 {
        font-size: 2em;
        color: ${props => props.theme.mainColor};
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
        color: ${props => props.theme.mainColor};
    }
    p {
        line-height: 1.875rem;
        margin-top: 2rem;
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
        border-left: 5px solid #ddd;
        margin: 30px 0;
    }
    blockquote p {
        font-style: italic;
        padding: 10px 20px;
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
        border: 1px solid ${props => props.theme.mainColor}30;
    }
    th,
    td {
        padding: 0.5rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 3rem 1rem;
    }
`
