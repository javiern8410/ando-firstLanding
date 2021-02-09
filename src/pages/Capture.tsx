import React from 'react';
import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import Form from "../components/forms/Form";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './capture.scss';

import logo from '../images/logo.png';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
	gtmId: 'GTM-PV4LQ97'
  }

TagManager.initialize(tagManagerArgs);

const Capture = () => {
	(window as any).dataLayer.push({
		event: 'pageview',
		page: {
		  url: window.location.href,
		  title: "Landing inicial de conversión"
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
			<div className="header">
				<div className="container">
					<Logo />
					<div className="slogan">
							¿Sabes cual es el secreto de las personas exitosas?
					</div>
					<div className="header-msg">
						Es Muy Sencillo: <span className="emfasys"> Son Profesionales </span>
					</div>
					<div>
						<p className="subtitle">
							¡Gana más Clientes y consigue Más Ventas a través de una Plataforma de Clase Mundial 
							que podemos construir Exclusivamente para tu Agencia de Viajes sin que te cueste un Solo Céntimo!
						</p>
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div className="bullet-points-list">
						<div>
							Ponemos a Tu Disposición <span className="emfasys"> una Plataforma de Clase Mundial </span> con Excelentes Resultados en Varios Mercados
						</div>
						<ul>
							<li>
								<div className="bp-icon">
									<i className="fa fa-rocket fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="bp-emfasys">Inmediatez</h5>
									<p>
										Vínculo Directa con Varios Proveedores que permite a los Viajeros reservar en tu plataforma y tener confirmación inmediata.
									</p>
								</div>
								<div>
									<span className="bullet-points-number">
										1
									</span>
								</div>
							</li>
							<li>
								<div className="bp-icon">
									<i className="fa fa-handshake-o fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="bp-emfasys">Simplicidad</h5>
									<p>
										Capacidad de Integrarse con Cualquier Proveedor de forma Sencilla, sin la Necesidad de un Programador
									</p>
								</div>
								<div>
									<span className="bullet-points-number">
										2
									</span>
								</div>
							</li>
							<li>
								<div className="bp-icon">
									<i className="fa fa-users fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="bp-emfasys">Potencialidad</h5>
									<p>
										Escalabilidad Infinita. Soportamos Todo el Crecimiento que Tu Agencia Tendrá.
									</p>
								</div>
								<div>
									<span className="bullet-points-number">
										3
									</span>
								</div>
							</li>
							<li>
								<div className="bp-icon">
									<i className="fa fa-cogs fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="bp-emfasys">Mantenimiento</h5>
									<p>
										Actualizaciones y Soporte Técnico 24/7 
									</p>
								</div>
								<div>
									<span className="bullet-points-number">
										4
									</span>
								</div>
							</li>
							<li>
								<div className="bp-icon">
									<i className="fa fa-shield fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="bp-emfasys">Seguridad</h5>
									<p>
										Sistema de Protección de la Información 100% Garantizado
									</p>
								</div>
								<div>
									<span className="bullet-points-number">
										5
									</span>
								</div>
							</li>
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
				<div className="copyright">
					Copyright &copy; 2020 Ando Solutions. Todos Los Derechos Reservados.
				</div>
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Capture;