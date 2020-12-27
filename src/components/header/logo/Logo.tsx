import React from 'react'
import './logo.scss';
import logo from '../../../images/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="AndoPQ Software Solutions" />
        </div>
    );
};

export default Logo;
