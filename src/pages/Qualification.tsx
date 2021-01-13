import React from 'react';
import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import QualificationForm from "../components/forms/QualificationForm";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './qualification.scss';

import logo from '../images/logo.png';
import mainPic from '../images/laptop1.png';


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
			<div className="header">
				<div className="container">
					<Logo />
					<div className="slogan">
						Estás a un paso de obtener...
					</div>
					<div className="header-msg">
						Tu propio <span className="emfasys"> Sistema de Reservas Sin Costo por 30 Días</span>
					</div>
					<div className="slogan">
						Con toda honestidad te decimos que este puede ser el paso de avance más importante de tu negocio este año.
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
								<li className="bp-icon">
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
								<li className="bp-icon">
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
								<li className="bp-icon">
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
								<li className="bp-icon">
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
				<div>
					&copy; Copyright 2020 Ando Solutions
				</div>
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Qualification;