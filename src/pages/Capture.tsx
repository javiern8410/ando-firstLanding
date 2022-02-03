import React from 'react';
// import useScript from '../hooks/useScript';
import FooterLinks from '../components/footer/FooterLinks';
import Logo from "../components/header/logo/Logo";
import Form from "../components/forms/Form";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './capture.scss';


import TagManager from 'react-gtm-module'
import CookiesMsg from '../components/cookiesmsg/CookieConsent';

const tagManagerArgs = {
	gtmId: 'GTM-PV4LQ97'
}

TagManager.initialize(tagManagerArgs);

const bulletPointsList = [
	{
		icon: "usd",
		title: "Más Reservas",
		text: "Todos tus Productos Turísticos en un solo lugar. Confirmación automática. Integraciones API Sin Costo… y Más."
	},
	{
		icon: "tablet",
		title: "Mejor Gestión",
		text: "Sistema Modular de Administración Intuitivo. CRM y Reportes Operativos y Financieros. Confrmación automatizada en tiempo real. Menos tiempo, Menos Gastos."
	},
	{
		icon: "check-square-o",
		title: "Control Absoluto",
		text: "Plataforma basada en la Web. Soporta todos los dispositivos y navegadores."
	},
	{
		icon: "cogs",
		title: "Alta Confiabilidad",
		text: "Te asistimos 24/7. Garantizamos disponibilidad del Sistema sin interrupciones."
	},
	{
		icon: "thumbs-up",
		title: "Cliente 100% Satisfecho",
		text: "Tu página de ventas totalmente personalizada con tu marca. Fácil de usar y de carga rápida. ¡Te ayudamos a gestionar tu Agencia de Viaje al estilo de los Grandes!"
	}
]

const Capture = () => {
	(window as any).dataLayer.push({
		event: 'pageview',
		page: {
		  url: window.location.href,
		  title: "Landing de Captura"
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
		<div className="capture-container" id="top">
			<CookiesMsg />
			<div className="backG"></div>
			<div className="header">
				<div className="container">
					<Logo />
					<div className="slogan">
						Potencia Tus Ventas
					</div>
					<div className="header-msg">
						Software #1 GDS Personalizado para <span className="emfasys">Agencias de Viajes.</span>
					</div>
					<div>
						<p className="subtitle">
							El Futuro de Agencias de Viajes Pequeñas y Medianas depende de la Disponibilidad, Accesibilidad y Confirmación en Tiempo Real de las Reservas.
						</p>
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div className="bullet-points-list">
						<div style={{fontSize: '1.4em'}}>
							Ponemos a Tu Disposición <span className="emfasys"> una Plataforma de Clase Mundial </span> con Excelentes Resultados en Varios Mercados
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
					<Form />
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

export default Capture;