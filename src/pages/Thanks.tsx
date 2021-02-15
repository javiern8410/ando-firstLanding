import React, { FunctionComponent } from 'react';
// import useScript from '../hooks/useScript';

import Logo from "../components/header/logo/Logo";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './thanks.scss';

import my_business from '../images/vacations.jpg';
import FooterLinks from '../components/footer/FooterLinks';

const Thanks: FunctionComponent<any> = ({step}) => {

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

	console.log(step);
	
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
						{
							(step !== '' && step === "capture") ? (
								'En menos de 15 minutos Recibirás un Email con el Acceso a Tu Video Demostrativo GRATUITO Sobre la Plataforma de Gestión.'
							) : (
								'En menos de 15 minutos Recibirás un Email donde estaremos explicándote los próximos pasos una vez califiques para Tu Prueba de 30 días Gratis.'
							)
						}
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
								Jose Manuel (Ando Solutions) revisa en las bandejas de spam y promociones, a veces van allí los correos. 
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
				<FooterLinks />
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Thanks;