import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import * as S from '../styles/layout'
import IconMoon from '../images/moon.svg'
import IconDay from '../images/sun.svg'

const menuLinks = [
    {
        linkTitle: 'INDEX',
        path: '/',
    },
    {
        linkTitle: 'ARTICLE',
        path: '/list/1',
    },
    {
        linkTitle: 'RESUME',
        path: '/about',
    },
    {
        linkTitle: 'WORK',
        path: '/work',
    },
]

const NavMenus = ({ isDark, setIsDark }) => {
    const [isMobile, setIsMobile] = useState(true)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        } else if (isMobile) {
            setIsMobile(false)
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true)
            } else if (isMobile) {
                setIsMobile(false)
            }
        })
        return () => {
            window.removeEventListener('resize', {})
        }
    }, [])

    return (
        <S.Menus>
            <button
                className="theme-toggler"
                aria-label="theme-toggler"
                onClick={setIsDark}
            >
                {isDark ? (
                    <IconMoon className="toggler-moon" />
                ) : (
                    <IconDay className="toggler-sun" />
                )}
            </button>

            {isMobile ? (
                <>
                    <label className="menu-toggler" htmlFor="menuToggler">
                        <input
                            type="checkbox"
                            id="menuToggler"
                            checked={showMobileMenu}
                            onChange={e => setShowMobileMenu(e.target.checked)}
                        />
                        <div className="hamburger"></div>
                    </label>
                    <div
                        className={`menu-items-mobile ${
                            showMobileMenu ? 'active' : 'collapse'
                        }`}
                    >
                        {menuLinks.map((menu, index) => {
                            return (
                                <React.Fragment key={menu.path}>
                                    <Link
                                        to={menu.path}
                                        onClickCapture={() =>
                                            setShowMobileMenu(false)
                                        }
                                    >
                                        {menu.linkTitle}
                                    </Link>
                                    {index !== menuLinks.length - 1 && (
                                        <span className="slash">/</span>
                                    )}
                                </React.Fragment>
                            )
                        })}
                        <button
                            className="collaps-menu-btn"
                            onClick={() => setShowMobileMenu(false)}
                        />
                    </div>
                </>
            ) : (
                <div className="menu-items">
                    <Link to="/list/1">ARTICLE</Link>
                    <span className="slash">/</span>
                    <Link to="/about">RESUME</Link>
                    <span className="slash">/</span>
                    <Link to="/work">WORK</Link>
                </div>
            )}
        </S.Menus>
    )
}

export default NavMenus
