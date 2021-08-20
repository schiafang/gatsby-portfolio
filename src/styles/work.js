import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 60px 0;

    section {
        display: flex;
        flex-direction: column;
        line-height: 1.56;
        letter-spacing: 1.2px;
        margin-bottom: 100px;

        .project-introduction {
            padding: 0 3.5rem;
            font-size: 0.9rem;

            > h2 {
                margin: 1rem 0;
                display: flex;
                justify-content: space-between;
            }

            > h2 a {
                color: ${props => props.theme.primary};
            }

            > p {
                margin-bottom: 0.5rem;
            }

            > span {
                line-height: 3rem;
                padding: 3px 5px;
                border: 1px solid #333;
                border-radius: 2px;
            }

            > ul {
                padding: 0 1.2rem;

                li {
                    list-style-type: emoji;
                    font-size: 0.9rem;
                    text-decoration: dotted;
                }
            }

            @counter-style emoji {
                system: cyclic;
                symbols: 🚀 🌵 🪐 🚂 🌞 ✨ ❄️ ⚡️ 🔥 ⭐;
                suffix: ' ';
            }
        }
    }

    @media ${props => props.theme.breakpoints.desktop} {
        section .project-introduction {
            padding: 0 5rem;
        }
    }

    @media ${props => props.theme.breakpoints.wideScreen} {
        section .project-introduction {
            padding: 0 7rem;
        }
    }
`
