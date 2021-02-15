import React from 'react';
// import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import QualificationForm from "../components/forms/QualificationForm";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './qualification34.scss';

import mainPic from '../images/laptop1.png';
import FooterLinks from '../components/footer/FooterLinks';


const Qualification = () => {
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
	document.body.appendChild(s);

	return (
		<div className="quialification-container" id="top">
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
					<div className="slogan">
						Llena este Formulario Ahora y podrás descubrir si Calificas para esta Exclusiva Oportunidad.
					</div>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<div>
						<div className="main-pic">
							<img src={mainPic} alt="AndoPQ Software Solutions" width="100%" />
						</div>
						<div className="bullet-points-list">
							<ul>
								<li>
									<div className="bp-icon">
										<i className="fa fa-area-chart fa-2x" aria-hidden="true" />
									</div>
									<div className="text">
										<h5 className="bp-emfasys">Garantizar</h5>
										<p>
											Mayor retención de Clientes y Más Ventas a través de confirmaciones automáticas y Gestión Automatizada de la Disponibilidad.
										</p>
									</div>
									<div>
										<span className="bullet-points-number">
											1
										</span>
									</div>
								</li>
								<li className="bp-icon">
									<div className="bp-icon">
										<i className="fa fa-line-chart fa-2x" aria-hidden="true" />
									</div>
									<div className="text">
										<h5 className="bp-emfasys">Crecer</h5>
										<p>
											Usando todas las Funcionalidades de nuestra Plataforma entre las que están: Reservas, Facturación y Cobro, Informes Operacionales… y Más.
										</p>
									</div>
									<div>
										<span className="bullet-points-number">
											2
										</span>
									</div>
								</li>
								<li className="bp-icon">
									<div className="bp-icon">
										<i className="fa fa-globe fa-2x" aria-hidden="true" />
									</div>
									<div className="text">
										<h5 className="bp-emfasys">Globalizar</h5>
										<p>
											Tus ventas mediante funcionamiento las 24 horas tomando ventaja de una Plataforma GDS totalmente integrada y automatizada.
										</p>
									</div>
									<div>
										<span className="bullet-points-number">
											3
										</span>
									</div>
								</li>
								<li className="bp-icon">
									<div className="bp-icon">
										<i className="fa fa-cogs fa-2x" aria-hidden="true" />
									</div>
									<div className="text">
										<h5 className="bp-emfasys">Mantener</h5>
										<p>
										Toda la operación de Tu Agencia sin interrupciones gracias a nuestro Soporte 24/7.
										</p>
									</div>
									<div>
										<span className="bullet-points-number">
											4
										</span>
									</div>
								</li>
								<li className="bp-icon">
									<div className="bp-icon">
										<i className="fa fa-rocket fa-2x" aria-hidden="true" />
									</div>
									<div className="text">
										<h5 className="bp-emfasys">Competir</h5>
										<p>
											Al estilo de los Grandes con un Sistema Seguro, Intuitivo y Profesional, adaptado para todo tipo de dispositivos.
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
					</div>
					<div>
						<QualificationForm />
					</div>
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