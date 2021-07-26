import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 5rem);
    font-family: 'Roboto', sans-serif;
    margin: 30px 0;
    box-shadow: ${props => props.theme.mainColor}15 0px 5px 15px;
    border-radius: 4px;

    @media ${props => props.theme.breakpoints.tablet} {
        margin: 30px 12%;
    }

    @media ${props => props.theme.breakpoints.desktop} {
        margin: 30px 0;
        display: grid;
        grid-template-columns: minmax(300px, 30%) auto;
    }
`

export const Info = styled.div`
    position: relative;
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.mainBackground}20;
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

    @media ${props => props.theme.breakpoints.desktop} {
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
        background-color: ${props => props.theme.yellow}75;
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

        @media ${props => props.theme.breakpoints.desktop} {
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

        @media ${props => props.theme.breakpoints.desktop} {
            justify-self: center;
        }
    }

    .job-title {
        grid-area: title;
        color: #666;
        font-size: 0.9rem;
        font-size: 0.9em;

        @media ${props => props.theme.breakpoints.desktop} {
            justify-self: center;
        }
    }

    .brief {
        grid-area: brief;
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
        font-size: 0.85rem;
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
        gap: 10px;
        margin: 15px 0 30px 0;
        font-size: 0.75rem;

        &::before {
            content: '';
            display: block;
            width: 75%;
            height: 50px;
            position: absolute;
            left: 0;
            background-color: #44444410;
            margin-top: -2px;
            border-radius: 0 50px 50px 0;
        }

        span {
            display: flex;
            align-items: center;
            gap: 0 5px;
        }

        a > svg {
            color: ${props => (props.theme.isDarkMode ? '#bbb' : '#333')};
            margin: 0 5px;
            width: 12px;
            height: 12px;

            &:hover {
                color: ${props => props.theme.red};
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
    height: auto;
    flex-grow: 1;
    border-radius: 0 0 4px 4px;
    /* padding: 30px; */
    border-top: 2px solid ${props => props.theme.lightBorder};

    @media ${props => props.theme.breakpoints.desktop} {
        height: 100%;
        border-top: none;
        border-left: 2px solid ${props => props.theme.lightBorder};
        grid-column: 2 / 3;
        border-radius: 0 4px 4px 0;
    }
`

export const ContentSection = styled.section`
    margin: 15px 0;
    background-color: pink;
    padding: 30px;

    .skills {
    }
`

export const SectionTitle = styled.div`
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
    position: relative;
    margin-bottom: 15px;

    &::after {
        content: '';
        display: inline-block;
        position: relative;
        top: 50%;
        right: -0.3rem;
        transform: translateY(20%);
        width: 5px;
        height: 1.3rem;
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