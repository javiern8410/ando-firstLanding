import React from 'react';
import Logo from "../components/header/logo/Logo";
import Form from "../components/forms/Form";
import Clients from "../components/clients-comments/Clients";
import ToTopBtn from "../components/totopbtn/ToTopBtn";
import './capture.scss';

import logo from '../images/logo.png';

const Capture = () => {
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
						Con este Video Demostrativo Descubrirás el Potencial del Sistema de Reservas 
						que Podemos Construir Exclusivamente para Tu Agencia de Viajes sin que te Cueste un Solo Céntimo.
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
								<div>
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
								<div>
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
								<div>
									<i className="fa fa-users fa-2x" aria-hidden="true" />
								</div>
								<div className="text">
									<h5 className="pb-emfasys">Potencialidad</h5>
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
								<div>
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
								<div>
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
					<i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
					<i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
					<i className="fa fa-instagram fa-2x" aria-hidden="true" />
					<i className="fa fa-youtube-play fa-2x" aria-hidden="true" />
				</div>
				<div>
					Copyright &copy; 2020 Ando Solutions. Todos Los Derechos Reservados.
				</div>
			</div>
			<ToTopBtn />
		</div>
	);
}

export default Capture;