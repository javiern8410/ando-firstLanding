import React, { FunctionComponent } from 'react';
// import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './thanks.scss';

import logo from '../images/logo.png';
import my_business from '../images/congratulation-call.jpg';

const Thanks: FunctionComponent<any> = ({step}) => {

	// useScript('https://clientes.andopqsolutions.com/crmScript.js');

	const mscript = `(function({d=document,s='script',id='bacrmtrk', cKey, oKey}){
	  let n, p = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) {return;}
	  n = d.createElement(s); n.id = id;
	  n.src = "https://crm-api.eb4us.com/js/tracking.min.js";
	  n.onload = function(){__baCRMTracking.init({cKey, oKey})};
	  p.parentNode.insertBefore(n, p);
	}({
		cKey:'964d1775b722eff11b8ecd9e9ed5bd9e',
		oKey:'05937557e73824dd7d288c19f8597a77'
	}));`
	  
	const s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = false;
	s.innerHTML = mscript;
	document.body.prepend(s);
	
	return (
		<div className="thanks-container" id="top">
			<div className="header">
				<div className="header-top">
					<Logo />
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div className="header-msg">
						<span className="emfasys"> Has Agendado Tu Llamada Con Éxito! </span>
					</div>
				</div>
				<div className="container">
					<div className="main-subtitle">
                        Al llamarte te estaremos dando la noticia sobre tu calificación para probar el Sistema Global de Reservas de ANDO Solutions.
					</div>
				</div>
				<div className="container">
					<div className="email-steps">
						<p>
                            <h3>
                                Te recomendamos lo siguiente: 
                            </h3>
						</p>
						<ul>
							<li>
                                <div className="cards-number">
                                    1
                                </div>
								<div className="bp-icon">
									<i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
								</div>
								Te enviaremos un mensaje informándote los detalles, la hora y día de la llamada. 
							</li>
							<li style={{backgroundColor: '#bde0ff'}}>
                                <div className="cards-number">
                                    2
                                </div>
								<div className="bp-icon">
									<i className="fa fa-calendar fa-2x" aria-hidden="true" />
								</div>
                                Te haremos un recordatorio 1 hora antes.
							</li>
                            <li style={{backgroundColor: '#a7d3f9'}}>
                                <div className="cards-number">
                                    3
                                </div>
								<div className="bp-icon">
									<i className="fa fa-address-card fa-2x" aria-hidden="true" />
								</div>
                                Te enviaremos un documento con los temas de la entrevista, en aras que te prepares para ahorrarte tiempo.
							</li>
                            
						</ul>
						<h5>
							Te deseamos Éxitos!
						</h5>
						<ul>
							<li className="ando-team">
								<div className="bp-icon">
									<i className="fa fa-users fa-2x" aria-hidden="true" />
								</div>
                                <a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank">
								    Equipo ANDO Solutions.
                                </a>
							</li>
						</ul>
					</div>
					<div className="offer-video" style={{alignSelf: 'center'}}>
						<img src={my_business} className="img-fluid vacation-pic" alt="AndoPQ Software Solutions" width="460px" height="auto" />
					</div>
				</div>
			</div>
			<div className="clients">
				<div>
					<img src={logo} alt="AndoPQ Software Solutions" width="120px" />
				</div>
				<div className="social-links">
					<a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank">
						<i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
					</a>
					<a href="#" target="_blank">
						<i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
					</a>
					<a href="#" target="_blank">
						<i className="fa fa-instagram fa-2x" aria-hidden="true" />
					</a>
					<a href="https://www.linkedin.com/in/ando-solutions/" target="_blank">
						<i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
					</a>
					<a href="#" target="_blank">
						<i className="fa fa-youtube-play fa-2x" aria-hidden="true" />
					</a>
				</div>
				<div className="copy">
					&copy; Copyright ©2020 Todos Los Derechos Reservados. Ando Solutions
				</div>
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Thanks;