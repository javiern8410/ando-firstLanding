import React from 'react';
import Logo from "../components/header/logo/Logo";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './thanks.scss';

import logo from '../images/logo.png';
import my_business from '../images/vacations.jpg';

const Thanks = () => {
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
						<span className="emfasys"> Hemos Recibido Tu Solicitud Con Éxito! </span>
					</div>
				</div>
				<div className="container">
					<div className="main-subtitle">
						Antes de comenzar el emocionante viaje hacia el éxito debes preguntarte...
					</div>
				</div>
				<div className="container">
					<div className="email-steps">
						<p>
							Para garantizar que recibas nuestro correo sin problemas haz lo siguiente:
						</p>
						<ul>
							<li>
								<div className="bp-icon">
									<i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
								</div>
								Ve a tu bandeja de entrada. Si no encuentras nuestro correo
								(nombre del remitente) revisa en las bandejas de spam y promociones, a veces van allí los correos. 
							</li>
							<li>
								<div className="bp-icon">
									<i className="fa fa-address-card fa-2x" aria-hidden="true" />
								</div>
								Agréganos a tu lista de remitentes
							</li>
						</ul>
						<h5>
							Una Última Sugerencia....
						</h5>
						<ul>
							<li>
								<div className="bp-icon">
									<i className="fa fa-users fa-2x" aria-hidden="true" />
								</div>
								Visita nuestra página de Facebook dónde encontrarás mucha información de gran utilidad.
							</li>
						</ul>
					</div>
					<div className="offer-video">
						<img src={my_business} className="img-fluid vacation-pic" alt="AndoPQ Software Solutions" width="460px" height="auto" />
					</div>
				</div>
			</div>
			<div className="clients">
				<div>
					<img src={logo} alt="AndoPQ Software Solutions" width="120px" />
				</div>
				<div className="social-links">
					<i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
					<i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
					<i className="fa fa-instagram fa-2x" aria-hidden="true" />
					<i className="fa fa-youtube-play fa-2x" aria-hidden="true" />
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