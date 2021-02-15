import React, { FunctionComponent } from "react";

import logo from '../../images/logo.png';


const FooterLinks: FunctionComponent<any> = () => {
    return (
        <div className="footer-component">
            <img src={logo} alt="AndoPQ Software Solutions" width="200px" />
            <div className="social-links">
                <a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram fa-2x" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/ando-solutions/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube-play fa-2x" aria-hidden="true" />
                </a> */}
            </div>
            <div className="copyright">
                Copyright &copy; 2020 Ando Solutions. Todos Los Derechos Reservados.
            </div>
        </div>
    )
}

export default FooterLinks;