import React from 'react';
import Logo from "../components/header/logo/Logo";
import Clients from "../components/clients-comments/Clients";
import OfferCard from '../components/offert-card/offerCard';
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './offer.scss';

import logo from '../images/logo.png';
import my_business from '../images/my-business.png';
import gdsScreen from '../images/gds-screen.png';
import singleOpinion from '../images/single-opinion.png';
import singleOpinionText from '../images/single-comment-text.png';

const cardData = [
	{
		icon : "fa-area-chart",
		title : "Ofertas",
		text : "Ampliar tus ofertas a precios muy competitivos tomando ventaja de las integraciones que	ponemos a tu disposición."
	},
	{
		icon : "fa-puzzle-piece",
		title : "Servicios",
		text : "Dar un servicio de reservas al estilo de los grandes."
	},
	{
		icon : "fa-thumbs-o-up",
		title : "Publicidad",
		text : "Aumentar la popularidad de tu plataforma gracias a la facilidad que	integramos de compartir	en redes sociales."
	},
	{
		icon : "fa-shield",
		title : "Seguridad",
		text : "Dar credibilidad incuestionable de un servicio altamente seguro	y eficiente."
	},
	{
		icon : "fa-line-chart",
		title : "Ventas",
		text : "Potenciar tus ventas a niveles nunca pensados."
	}
]

const Offer = () => {
	return (
		<div className="offer-container" id="top">
			<div className="header">
				<div className="header-top">
					<Logo />
				</div>
				<div className="container">
					<div className="header-msg">
						<span className="emfasys"> Video Demostrativo </span>
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
			<div className="free-month">
				<div className="container" data-aos="fade-up">
					<div className="title">
						<h1>Mes de Prueba Gratis</h1>
					</div>
					<div className="cards">
						{
							cardData.map((card, index ) => (
								<OfferCard cardData={card} key={index} />
							))
						}
					</div>
					<div>
						<img src={gdsScreen} className="img-fluid" alt="AndoPQ Software Solutions" width="100%" />
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container" style={{marginTop: '30px'}}  data-aos="fade-up">
					<div className="offer-picture">
						<img src={singleOpinion} className="img-fluid" alt="AndoPQ Software Solutions" width="460px" />
					</div>
					<div className="offer-video">
						<img src={singleOpinionText} className="img-fluid" alt="AndoPQ Software Solutions" width="560px" height="350px" />
					</div>
				</div>
			</div>
			<div className="offer-24hrs">
				<div className="container">
					<p>
						Solo de ti depende la estabilidad y el futuro de tu negocio
					</p>
					<p>
						Debes saber que esta invaluable oportunidad que te ofrecemos no podemos mantenerla por mucho tiempo...
					</p>
					<p>
						Solo podemos hacerlo por 24 HORAS...
					</p>
					<div className="offer-message">
						¿Estoy listo para llevar <span className="emfasys"> mi negocio al próximo nivel </span> y
						garantizar <span className="emfasys">el estilo de vida que merezco?</span>
					</div>
					<div className="btn-free">
						<button className="btn-free-month">UN MES GRATIS</button>
					</div>
				</div>
			</div>
			<div className="clients">
				<div className="container">
					<div className="title">
						Nos sentimos orgullosos del
					</div>
					<div className="title emfasys">
						éxito de nuestros asociados
					</div>
					<Clients page="offer" />
				</div>
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

export default Offer;