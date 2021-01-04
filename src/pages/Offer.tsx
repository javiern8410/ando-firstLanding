import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../components/header/logo/Logo";
import Clients from "../components/clients-comments/Clients";
import OfferCard from '../components/offert-card/offerCard';
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './offer.scss';

import logo from '../images/logo.png';
import my_business from '../images/my-business.png';
import video_screen from '../images/laptop1.png';
import gdsScreen from '../images/gds-screen.png';
import singleOpinion from '../images/single-opinion.png';

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
];

const cardGds = [
	{
		icon : "fa-area-chart",
		title : "Crecimiento",
		text : "Escalabilidad Infinita. Soportamos Todo el Crecimiento que Tu Agencia Tendrá."
	},
	{
		icon : "fa-line-chart",
		title : "Ofertas",
		text : "Ampliar Tus Ofertas a precios Muy Competitivos tomando ventaja de las Integraciones que ponemos a Tu Disposición."
	},
	{
		icon : "fa-shield",
		title : "Credibilidad",
		text : "Dar credibilidad Incuestionable de un Servicio Altamente Seguro y Eficiente."
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
						<iframe className="video" src="https://www.youtube.com/embed/C7whcHmiaN8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Oferta Sistema GDS"></iframe>

						<h5 className="emfasys">El Mejor Momento es HOY...</h5>
						<p className="subtitle">
							Descubre <span className="strong-text"> Si Calificas </span> para probar <span className="emfasys"> tu propia plataforma de reservas </span> durante
							todo <span className="emfasys strong-text"> un mes totalmente gratis </span> haciendo clic en el botón de abajo ahora.
						</p>
						<div className="btn-free">
							<Link to="/qualification" className="btn-free-month" title="Si, Descubrir si califico para UN MES GRATIS">Si, Descubrir si califico para UN MES GRATIS</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="clients vip">
				<div className="container">
					<div className="title white">
						Nos sentimos orgullosos del
					</div>
					<div className="title emfasys">
						éxito de nuestros asociados
					</div>
					<Clients page="offer" />
				</div>
			</div>
			<div className="gds-offer">
				<div className="container">
					<div>
						<h5 className="emfasys">
							El Sistema GDS ANDO ha permitido a Agencias de Viajes como la Tuya los siguientes logros en Poco Tiempo:
						</h5>
					</div>
					<div className="cards">
						{
							cardGds.map((card, index ) => (
								<OfferCard cardData={card} key={index} />
							))
						}
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
						<Link to="/qualification" className="btn-free-month">UN MES GRATIS</Link>
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
			<div className="main testimonials">
				<div className="container" style={{marginTop: '30px'}}  data-aos="fade-up">
					<div>
						<img src={singleOpinion} className="img-fluid offer-picture shadow-pic" alt="AndoPQ Software Solutions" width="460px" />
					</div>
					<div className="offer-points shadow-pic">
						<div>
							<p>
								En los años que llevamos apoyando a agencias de viajes como la tuya con nuestras soluciones podemos decir que:
							</p>

							<ul className="">
								<li>Las Agencias de viajes asociadas han logrado mover mayor cantidad de viajeros desde su primer mes de implementación</li>
								<li>El 90% de los viajeros han vuelto a comprar sus vacaciones desde la plataforma de reserva por la flexibilidad y facilidad que representa para el cliente.</li>
							</ul>

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

export default Offer;