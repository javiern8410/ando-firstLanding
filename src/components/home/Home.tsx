import React from "react";
import Form from "../forms/Form";
import "./home.scss";
const homeImg = require("../../images/homePic.jpg");

const Home: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="main-content">
				<div>
					<h2 className="line">Es Muy Sencillo: Son Profesionales</h2>
				</div>
				<div className="container">
					<div className="main-section">
						<div>
							<img src={homeImg} alt="" className="img-fluid img-thumbnail float-left" />
						</div>
						<div className="bullet-points">
							<h5>
								Ponemos a Tu Disposición una Plataforma de Clase Mundial con Excelentes Resultados en Varios Mercados
							</h5>
							<div className="bullet-points-list">
								<ul>
									<li><i className="fa fa-check"></i> Vínculo Directa con Varios Proveedores que permite a los Viajeros reservar en tu plataforma y tener confirmación inmediata.</li>
									<li><i className="fa fa-check"></i> Capacidad de Integrarse con Cualquier Proveedor de forma Sencilla, sin la Necesidad de un Programador.</li>
									<li><i className="fa fa-check"></i> Escalabilidad Infinita. Soportamos Todo el Crecimiento que Tu Agencia Tendrá. </li>
									<li><i className="fa fa-check"></i> Actualizaciones y Soporte Técnico 24/7 </li>
									<li><i className="fa fa-check"></i> Sistema de Protección de la Información 100% Garantizado</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<Form />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
