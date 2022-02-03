import React from 'react';
// import useScript from '../hooks/useScript';
import FooterLinks from '../components/footer/FooterLinks';
import Logo from "../components/header/logo/Logo";
import QualificationForm from "../components/forms/QualificationForm";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './qualification.scss';

import mainPic from '../images/laptop1.png';

import TagManager from 'react-gtm-module';
import CookiesMsg from '../components/cookiesmsg/CookieConsent';

const tagManagerArgs = {
	gtmId: 'GTM-PV4LQ97'
}

const bulletPointsList = [
	{
		icon: "area-chart",
		title: "Garantizar",
		text: "Mayor retención de Clientes y Más Ventas a través de confirmaciones automáticas y Gestión Automatizada de la Disponibilidad."
	},
	{
		icon: "line-chart",
		title: "Crecer",
		text: "Usando todas las Funcionalidades de nuestra Plataforma entre las que están: Reservas, Facturación y Cobro, Informes Operacionales… y Más."
	},
	{
		icon: "globe",
		title: "Globalizar",
		text: "Tus ventas mediante funcionamiento las 24 horas tomando ventaja de una Plataforma GDS totalmente integrada y automatizada."
	},
	{
		icon: "cogs",
		title: "Mantener",
		text: "Toda la operación de Tu Agencia sin interrupciones gracias a nuestro Soporte 24/7."
	},
	{
		icon: "rocket",
		title: "Competir",
		text: "Al estilo de los Grandes con un Sistema Seguro, Intuitivo y Profesional, adaptado para todo tipo de dispositivos."
	}
]

TagManager.initialize(tagManagerArgs);

const Qualification = () => {
	(window as any).dataLayer.push({
		event: 'pageview',
		page: {
		  url: window.location.href,
		  title: "Landing de Calificación"
		}
	});

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
		<div className="qualification-container" id="top">
			<CookiesMsg />
			<div className="backG"></div>
			<div className="header">
				<div className="container">
					<Logo />
					<div className="slogan">
						Podrías Calificar para Probar Sin Costo
					</div>
					<div className="header-msg">
						Software #1 GDS Personalizado para <span className="emfasys">Agencias de Viajes.</span>
					</div>
					<div>
						<p className="subtitle">
						Llena este Formulario Ahora y podrás descubrir si Calificas para esta Exclusiva Oportunidad.
						</p>
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div className="bullet-points-list">
						<div>
							<img src={mainPic} alt="AndoPQ Software Solutions" width="100%" />
						</div>
						<ul>
							{
								bulletPointsList.map( (item, index) => (
									<li key={index}>
										<div className="bp-icon">
											<i className={`fa fa-${item.icon} fa-3x`} aria-hidden="true" />
										</div>
										<div className="text">
											<h5 className="bp-emfasys">{item.title}</h5>
											<p>
												{item.text}
											</p>
										</div>
										<div>
											<span className="bullet-points-number">
												{index + 1}
											</span>
										</div>
									</li>
								))
							}
						</ul>
					</div>
					<QualificationForm />
				</div>
			</div>
			<div className="clients">
				<div className="container">
					<span className="title">Nuestros clientes opinan</span>
					<Clients />
				</div>
			</div>
			<div className="footer">
				<FooterLinks />
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Qualification;