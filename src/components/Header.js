import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/assets/teslaLogoSmall.svg'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>
            <div className="header__center">
                <p>Mode S</p>
                <p>Mode 3</p>
                <p>Mode X</p>
                <p>Mode Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header
