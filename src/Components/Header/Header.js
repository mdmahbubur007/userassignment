import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo Here."/>
            <nav>
                <a href="/Users">Users Information</a>
                <a href="/PersonalFiles">Personal Details</a>
                <a href="/IncomeInformation">Income Information</a>
            </nav>
        </div>
    );
};

export default Header;