import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import Clients from "../components/clients-comments/Clients";
import OfferCard from '../components/offert-card/offerCard';
import Modal from '../components/modal/Modal';
import FooterLinks from '../components/footer/FooterLinks';
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './offer.scss';

import my_business from '../images/ando-team.jpg';
import gdsScreen from '../images/gds-screen.png';
import teamTwo from '../images/ando-team2.jpeg';
// import video_screen from '../images/laptop1.png';
// import singleOpinion from '../images/single-opinion.png';
// import videoMonitor from '../images/video-monitor.png';

import TagManager from 'react-gtm-module'
import CookiesMsg from '../components/cookiesmsg/CookieConsent';

const tagManagerArgs = {
	gtmId: 'GTM-PV4LQ97'
}

TagManager.initialize(tagManagerArgs);

const cardData = [
	{
		icon : "fa-area-chart",
		title : "Garantizar",
		text : "Mayor retención de Clientes y Más Ventas a través de confirmaciones automáticas y Gestión Automatizada de la Disponibilidad."
	},
	{
		icon : "fa-line-chart",
		title : "Crecer",
		text : "Usando todas las Funcionalidades de nuestra Plataforma entre las que están: Reservas,  Facturación y Cobro, Informes Operacionales… y Más."
	},
	{
		icon : "fa-globe",
		title : "Globalizar",
		text : "Tus ventas mediante funcionamiento las 24 horas tomando ventaja de una Plataforma GDS totalmente integrada y automatizada."
	},
	{
		icon : "fa-cogs",
		title : "Mantener",
		text : "Toda la operación de Tu Agencia sin interrupciones gracias a nuestro Soporte 24/7."
	},
	{
		icon : "fa-rocket",
		title : "Competir",
		text : "Al estilo de los Grandes con un Sistema Seguro, Intuitivo y Profesional, adaptado para todo tipo de dispositivos."
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
	// useScript('https://clientes.andopqsolutions.com/crmScript.js');

	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		setShowModal(false);
	}

	(window as any).dataLayer.push({
		event: 'pageview',
		page: {
		  url: window.location.href,
		  title: "Visita página de oferta"
		}
	});

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
	document.body.appendChild(s);

	return (
		<div className="offer-container" id="top">
			<CookiesMsg />
			<Modal showModal={showModal} handleClose={handleClose}>
				<iframe width="100%" height="100%" src="https://videomng.builderall.com/embed/LkcwiPNHIX/?autoplay=1&countdown=1&controls=1&allowpause=1&loop=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Oferta Sistema GDS"></iframe>
			</Modal>
			<div className="offer-header">
				<div className="backG"></div>
				<div className="header">
					<div className="header-top">
						<Logo />
					</div>
				</div>
				<div className="main">
					<div className="container">
						<div className="offer-msg">
							<div className="header-msg">
								Software #1 GDS Personalizado para Agencias de Viajes.
							</div>
							<div className="header-msg2">
								<span className="emfasys2">
									El Mejor Momento es HOY...
								</span>
							</div>
							<div>
								<p className="subtitle">
									Descubre <span className="strong-text"> Si Calificas </span> para probar <span className="strong-text"> tu propia plataforma de reservas </span> durante
								<span className="strong-text"> un mes totalmente gratis, </span> haciendo Clic en el Botón de abajo AHORA.
								</p>
							</div>
							<div className="btn-free">
								<Link to="/qualification" className="btn-free-month" title="Si, Descubrir si califico para UN MES GRATIS">¡Si, Quiero Descubrir Si Califico para la Prueba de Un Mes GRATIS!</Link>
							</div>
							<div className="arrow">
								<i className="fa fa-arrow-down fa-3x" aria-hidden="true" style={{fontWeight: 'lighter', color: '#e1e3ec'}} />
							</div>
						</div>
						<div className="offer-video">
							{/* <iframe className="video" src="https://www.youtube.com/embed/C7whcHmiaN8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Oferta Sistema GDS"></iframe> */}
							<div className="video">
								<i onClick={() => setShowModal(true)} className="fa fa-play-circle-o fa-5x" aria-hidden="true" style={{cursor: 'pointer', color: '#0bbde6', margin: '0 auto', fontSize: '8em'}} />
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="clients vip">
				<div className="container">
					<div className="title">
						Nos sentimos orgullosos del éxito de nuestros asociados.
					</div>
					<Clients page="offer" />
				</div>
			</div>
			<div className="gds-offer">
				<div className="container" data-aos="fade-up">
					<div>
						<h5 className="emfasys3" style={{textAlign: 'center'}}>
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
			<div className="testimonials">
				<div className="container">
					<div>
						<img src={teamTwo} className="img-fluid offer-picture shadow-pic" alt="AndoPQ Software Solutions" width="460px" />
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
			<div className="free-month">
				<div className="container" data-aos="fade-up">
					<div className="title">
						<h1>Durante todo un Mes de Prueba Sin Costo podrás</h1>
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
					<div className="btn-free">
						<Link to="/qualification" className="btn-free-month" title="Si, Descubrir si califico para UN MES GRATIS">
							¡Si, Quiero Descubrir Si Califico para la Prueba de Un Mes GRATIS!
						</Link>
					</div>
				</div>
			</div>
			<div className="offer-24hrs">
				<div className="backG second"></div>
				<div className="container">
					<div className="last-message">
						<p>
							Solo de ti depende la estabilidad y el futuro de tu negocio.
						</p>
						<p>
							Debes saber que esta invaluable oportunidad que te ofrecemos no podemos mantenerla por mucho tiempo...
						</p>
						<p>
							Solo podemos hacerlo por 24 HORAS...
						</p>
					</div>
					<div className="offer-message" data-aos="flip-left">
						¿Estoy listo para llevar <span className="emfasys3"> mi negocio al próximo nivel </span> y
						garantizar <span className="emfasys3">el estilo de vida que merezco?</span>
					</div>
					<div className="btn-free">
						<Link to="/qualification" className="btn-free-month" title="Si, Descubrir si califico para UN MES GRATIS">
							¡Si, Quiero Descubrir Si Califico para la Prueba de Un Mes GRATIS!
						</Link>
					</div>
				</div>
			</div>
			<div className="clients">
				<FooterLinks />
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Offer;