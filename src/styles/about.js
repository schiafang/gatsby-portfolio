import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    margin: 60px 0;
    box-shadow: ${props => props.theme.primary}25 1px 1px 4px;
    border-radius: 4px;
    line-height: 1.56;
    letter-spacing: 1.2px;

    @media screen and (min-width: 768px) {
        margin: 60px 12%;
    }

    @media screen and (min-width: 1040px) {
        padding: 60px 45px;
    }

    @media screen and (min-width: 1600px) {
        margin: 30px 0;
        display: grid;
        grid-template-columns: minmax(300px, 30%) auto auto;
    }
`

export const Info = styled.div`
    position: relative;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.bg}20;
    border-radius: 4px 4px 0 0;
    height: auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: auto 80px;
    grid-template-rows: minmax(30px, auto) repeat(4, auto);
    grid-template-areas:
        'name avatar'
        'title avatar'
        'brief brief'
        'contact contact'
        'link link';

    @media screen and (min-width: 1600px) {
        grid-column: 1 / 2;
        border-radius: 4px 0 0 4px;
        grid-template-columns: auto;
        grid-template-rows: 120px repeat(2, 30px) repeat(3, max-content);
        grid-template-areas:
            'avatar'
            'name'
            'title'
            'brief'
            'contact'
            'link';
    }

    .thumbnail {
        grid-area: avatar;
        background-color: #eeda95;
        width: 80px;
        height: 80px;
        border-radius: 50% 50% 50% 15px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 60% 30%;
        }

        @media screen and (min-width: 1600px) {
            justify-self: center;
            border-radius: 37% 42% 39% 43%;
            width: 100px;
            height: 100px;
        }
    }

    .name {
        grid-area: name;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0 0.8rem;

        > :nth-child(1) {
            word-spacing: 0.4rem;
        }

        > :nth-child(2) {
            /* color: #666; */
        }

        @media screen and (min-width: 1600px) {
            justify-self: center;
        }
    }

    .job-title {
        grid-area: title;
        color: #666;
        font-size: 0.9rem;
        font-size: 0.9em;

        @media screen and (min-width: 1600px) {
            justify-self: center;
        }
    }

    .brief {
        grid-area: brief;
        margin: 2rem 0 1rem 0;
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
        font-size: 0.8rem;
        position: relative;
        height: fit-content;

        svg {
            position: absolute;
            transform: scale(0.8);
        }

        > svg:nth-child(1) {
            left: -15px;
            top: 0;
        }

        > svg:nth-child(2) {
            right: -15px;
            bottom: 0;
        }
    }

    .contact-info {
        grid-area: contact;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 15px 0 30px 0;
        font-size: 0.85rem;

        span {
            display: flex;
            align-items: center;
            gap: 0 5px;
            font-size: 0.8rem;
            color: ${props => props.theme.grayDark};
        }

        a {
            color: ${props => props.theme.gray};
            text-decoration: none;

            svg {
                margin-right: 10px;
                width: 12px;
                height: 12px;
            }

            &:hover {
                color: ${props => props.theme.green};
            }
        }
    }

    .social-link {
        grid-area: link;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 0 12px;

        a svg {
            width: 16px;
            height: 16px;
            transform: scale(1.2);
        }

        a[data-label='github'] svg,
        a[data-label='medium'] svg {
            color: ${props => (props.theme.isDarkMode ? '#FFF' : '#333')};
        }

        a[data-label='linkedin'] svg {
            color: #0077b5;
        }

        a[data-label='facebook'] svg {
            color: #4267b2;
        }

        a[data-label='twitter'] svg {
            color: #1da1f2;
        }

        a[data-label='instagram'] svg {
            color: #1da1f2;
            margin-top: 3px;
        }
    }
`

export const ContentWrapper = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 0 0 4px 4px;
    border-top: 2px solid ${props => props.theme.border};
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1600px) {
        height: 100%;
        grid-column: 2 / 3;
        border-top: none;
        border-left: 2px solid ${props => props.theme.border};
        border-radius: 0 4px 4px 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0 5px;
    }
`

export const ContentSection = styled.section`
    height: 100%;
    font-size: 0.85rem;
    margin-bottom: 60px;

    &.skills {
        display: flex;
        flex-direction: column;

        > div:not(:first-child) {
            margin: 15px 0;

            h4 {
                margin: 0 0 0.5rem 0;
            }

            ul {
                font-size: 0.8rem;
                line-height: 1.74;
            }
        }
    }

    @media screen and (min-width: 768px) {
        &.skills {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            > :first-child {
                width: 100%;
            }

            > div {
                width: 45%;
            }
        }
    }

    @media screen and (min-width: 1600px) {
        padding: 2rem;
        grid-row: 1 / 2;
        margin-bottom: 0;

        &.experience {
            grid-column: 1 / span 1;
            max-height: 100%;
            overflow: auto;
        }

        &.skills {
            display: block;
            grid-column: 2 / span 1;
            white-space: nowrap;
        }
    }

    .section-item {
        padding: 0 30px 60px 30px;
        position: relative;

        &::before {
            display: block;
            content: '';
            width: 0.8rem;
            height: 0.8rem;
            background-color: ${props => props.theme.green};
            position: absolute;
            top: 0.4rem;
            left: -0.4rem;
            border-radius: 50%;
        }

        &::after {
            display: block;
            content: '';
            width: 3px;
            height: 100%;
            background-color: ${props => props.theme.yellow}50;
            position: absolute;
            top: 0.8rem;
            left: -1.5px;
            z-index: -1;
        }

        .organization {
            font-size: 1.1rem;
            font-weight: 500;
        }

        .period {
            font-size: 0.85rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
            color: ${props => props.theme.red};
        }

        .project {
            display: block;
            color: #437c90;
            font-weight: 600;
            margin: 2rem 0 0.4rem 0;
        }

        .description {
            color: #888;
            font-size: 0.8rem;
            margin-bottom: 5px;
        }

        .skills {
            font-weight: 400;
            background-image: ${props =>
                props.theme.isDarkMode
                    ? 'linear-gradient(120deg, #eee4c150, #f8e4a150)'
                    : 'linear-gradient(120deg, #eee4c1, #f8e4a1)'};
            background-repeat: no-repeat;
            background-size: 100% 0.5em;
            background-position: 0 88%;
            padding: 0 5px;
        }

        > ul {
            margin: 0.5rem 1.5rem;
            font-size: 0.8rem;

            &.decimal {
                list-style-type: decimal;
            }

            &.disc {
                list-style-type: disc;
            }
        }
    }

    section:last-of-type {
        padding: 0 30px 15px 30px;
    }

    svg {
        color: ${props => props.theme.red};
        position: relative;
        top: 1.2rem;
        left: -0.6rem;
        font-size: 1.2rem;
    }
`

export const SectionTitle = styled.div`
    display: block;
    font-weight: bold;
    font-size: 1.2rem;
    position: relative;
    margin-bottom: 15px;

    &.skills::after {
        content: '';
        display: inline-block;
        position: relative;
        top: 0;
        right: -0.3rem;
        transform: translateY(15%);
        width: 4px;
        height: 1.2rem;
        background-color: ${props => props.theme.green};
        animation: blinkCursor 3s step-end infinite;

        @keyframes blinkCursor {
            from,
            to {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
        }
    }
`
