import React from 'react';
import Logo from "../components/header/logo/Logo";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './thanks.scss';

import logo from '../images/logo.png';
import my_business from '../images/my-business.png';
import gdsScreen from '../images/gds-screen.png';
import singleOpinion from '../images/single-opinion.png';
import singleOpinionText from '../images/single-comment-text.png';

const Thanks = () => {
	return (
		<div className="thanks-container" id="top">
			<div className="header">
				<div className="header-top">
					<Logo />
				</div>
				<div className="container">
					<div className="header-msg">
						<span className="emfasys"> Hemos Recibido Tu Solicitud Con Éxito! </span>
					</div>
					<div>
						<p className="subtitle">
							Antes de comenzar el emocionante viaje hacia el éxito debes preguntarte...
						</p>
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div className="offer-picture">
						<img src={my_business} className="img-fluid" alt="AndoPQ Software Solutions" width="460px" />
					</div>
					<div className="offer-video">
						{/* <iframe className="video" src="https://www.youtube.com/embed/C7whcHmiaN8" 
							frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowFullScreen title="Oferta Sistema GDS"></iframe> */}
						<img src={my_business} alt="AndoPQ Software Solutions" width="560px" height="350px" />

						<h5 className="emfasys">El Mejor Momento es HOY...</h5>
						<p className="subtitle">
							Descubre si calificas para probar <span className="emfasys"> tu propia plataforma de reservas </span> durante
							todo <span className="emfasys"> un mes totalmente gratis </span> haciendo clic en el botón de abajo ahora.
						</p>
						<div className="btn-free">
							<button className="btn-free-month">UN MES GRATIS</button>
						</div>
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