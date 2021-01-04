import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
import logo from '../../../images/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="logo-link">
                <img src={logo} alt="AndoPQ Software Solutions" />
            </Link>
        </div>
    );
};

export default Logo;
