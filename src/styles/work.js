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

        & img {
            width: 100%;
        }

        .project-introduction {
            padding: 0 15px;
            font-size: 0.9rem;

            > h2 {
                font-size: 1.3rem;
                margin: 1rem 0;
                display: flex;
                justify-content: space-between;

                @media screen and (min-width: 768px) {
                    font-size: 1.4rem;
                }

                @media screen and (min-width: 1040px) {
                    font-size: 1.5rem;
                }
            }

            > h2 a {
                color: ${props => props.theme.primary};
            }

            > h2 .title {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            > h2 .year {
                background-color: ${props => props.theme.red};
                font-size: 12px;
                border-radius: 50px;
                padding: 3px 10px;
                color: white;
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

    @media screen and (min-width: 1040px) {
        section .project-introduction {
            padding: 0 5rem;
        }
    }

    @media screen and (min-width: 1280px) {
        section .project-introduction {
            padding: 0 7rem;
        }
    }
`
