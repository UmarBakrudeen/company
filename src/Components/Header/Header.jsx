import React, { Fragment } from 'react'
import './Header.scss'

const Header = () => {
    return (
        <Fragment>
            <div className="header__container">
                <div className="header__content">
                    <div className="header__wrapper">
                        <div className="logo">
                            <h3> Code Point </h3>
                        </div>
                        <div className="menus">
                            <ul>
                                <li>
                                    <a href="/"> Home </a>
                                </li>
                                <li>
                                    <a href="/"> About Us </a>
                                </li>
                                <li>
                                    <a href="/"> Services </a>
                                </li>
                                <li>
                                    <a href="/"> Contact Us </a>
                                </li>
                                <div className='header-btn'> Get a quote</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header