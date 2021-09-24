import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 15px 0;
    position: relative;

    a {
        text-decoration: none;
        color: inherit;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const Menus = styled.div`
    position: relative;
    height: inherit;
    display: flex;
    align-items: center;

    .menu-items {
        font-size: 0.9rem;

        .slash {
            margin: 0 10px;
        }
    }

    .menu-items-mobile {
        background-color: ${props => props.theme.primary};
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        z-index: 99;
        transform: translateX(100%) translate3d(120px, 0, 0);
        transition: transform 0.5s cubic-bezier(0.15, 0.65, 0.66, 0.11);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > * {
            margin-bottom: 30px;
        }

        &.active {
            transform: translateX(0);
        }

        .slash {
            color: ${props => props.theme.bg};
        }

        a {
            color: ${props => props.theme.green};
            font-weight: bold;
        }

        *::selection {
            background: ${props => props.theme.yellow};
        }
    }

    .collaps-menu-btn {
        width: 35px;
        height: 35px;
        background-color: transparent;
        border: 3px solid ${props => props.theme.bg};
        border-radius: 10px;
        position: absolute;
        top: 5%;
        right: 10%;
        cursor: pointer;
        transition: all ease 0.3s;
        transform: scale(0.9);

        &:hover {
            transform: scale(1);
            border-radius: 50%;
            animation: rotate 0.5s ease-in;

            @keyframes rotate {
                0% {
                    transform: scale(1) rotate(0deg);
                }
                100% {
                    transform: scale(1) rotate(90deg);
                }
            }
        }

        &::after,
        &::before {
            content: '';
            display: block;
            width: 30px;
            height: 4px;
            background-color: ${props => props.theme.red};
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
            left: 0;
            border-radius: 2px;
        }

        &::after {
            transform: translateY(-50%) rotate(45deg);
        }

        &::before {
            transform: translateY(-50%) rotate(135deg);
        }
    }

    .theme-toggler {
        background-color: transparent;
        height: 30px;
        border: none;
        cursor: pointer;
        position: absolute;
        left: -40px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;

        svg {
            width: 20px;
        }

        .toggler-moon {
            fill: ${props => props.theme.yellow};
        }

        .toggler-sun {
            fill: ${props => props.theme.primary};
        }
    }

    .menu-toggler {
        display: block;
        width: 32px;
        height: 100%;
        transform: scale(0.85);

        input {
            display: none;
        }

        &:hover {
            cursor: pointer;
            .hamburger::after {
                transform-origin: 100% -150px;
                transform: rotate(5deg);
            }
            .hamburger::before {
                bottom: -11px;
            }
        }

        .hamburger {
            width: 32px;
            height: 6px;
            background-color: ${props => props.theme.primary};
            border-radius: 3px;
            position: relative;
            top: 50%;
            transform: translateY(-50%) scale(0.65);

            transition: all ease 0.4s;

            &::after,
            &::before {
                content: '';
                width: 30px;
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                background-color: inherit;
            }

            &::after {
                height: 12px;
                border-radius: 15px 15px 3px 3px;
                top: -15px;
            }

            &::before {
                height: 8px;
                border-radius: 4px 4px 10px 10px;
                bottom: -11px;
            }
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    font-size: 0.85rem;

    > * {
        padding: 0 10px;
    }

    a {
        font-size: 1.3rem;
        color: ${props => props.theme.primary};
        opacity: 0.6;

        &:hover {
            opacity: 1;
        }
    }

    .admin-btn {
        font-size: 0.8rem;
        cursor: pointer;
        color: ${props => props.theme.grayLight};
        opacity: 0.6;

        &:hover {
            opacity: 1;
        }
    }
`
