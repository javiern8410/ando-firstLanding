import React, { useState, FunctionComponent, useRef } from "react";
import MyModal from '../modal/Modal'
import FormData from 'form-data';
import { ApiClient } from '../../clients/api.client';
import "./form.scss";

const initialState = {
	FNAME: '',
	EMAIL: '',
	TEXT: ''
}

const Form: FunctionComponent<any> = () => {
	const [clientData, setClientData] = useState(initialState)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false);
	const [captured, setCaptured] = useState(false)

	const captureForm : any = useRef(null);

	/* const handleSubmit = async (event: any) => {
		event.preventDefault();
		const formData: any = new FormData(event.target);

		try {
			setLoading(true);
			setError(false);
			if (
				!clientData.FNAME ||
				!clientData.EMAIL ||
				!clientData.TEXT
			) {
				throw new Error("EmptyField");
			} else {
				const url = "https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe";
				const response = await ApiClient.subscribe(url, formData);
				if (response && response.status === 0) {
					setCaptured(true);
				}
				setLoading(false);
				const form: any = document.getElementById("capture");
				form && form.reset();
			}

		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(true);
		}
	} */

	const handleSubmit = (event: any) => {
		setLoading(true);
		event.preventDefault();
		captureForm.current.submit();	
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setClientData({ ...clientData, [name]: value });
	}

	const handleClose = () => {
		setCaptured(false);
	}

	return (
		<div className="form-container" id="capture-form">
			{/* <form id="capture" target="_blank" method="post" action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe"> */}
			{/* <form data-v-64754bc8="" method="post" action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe" target="_self" ba-crm-id="baa906151736cc495243b4b75a760e6111b7a911"> */}
			<form ref={captureForm} method="post" onSubmit={handleSubmit} action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe" target="_self">
			{/* <form id="capture" method="post" onSubmit={handleSubmit}> */}
				<div className="form-title">
					<h6 className="emfasis">
						¡DESCUBRE LA POTENCIA QUE LE DAMOS A TU NEGOCIO!
					</h6>
					<h3 style={{textAlign: 'center', margin: '15px'}}>
						Completa este Formulario y Accede al Video Demo que hemos preparado para ti Totalmente Gratis.
					</h3>
				</div>
				<div className="form-body">
					<div>
						<label>Nombre</label>
					</div>

					<div>
						<input type="text" name="FNAME" onChange={handleChange} className="form-control form-control-lg" placeholder="Tu nombre" required />
					</div>

					<div>
						<label>Agencia</label>
					</div>

					<div>
						<input type="text" name="TEXT" onChange={handleChange} className="form-control form-control-lg" placeholder="Nombre de tu agencia" required />
					</div>

					<div>
						<label>Email</label>
					</div>

					<div>
						<input type="email" name="EMAIL" onChange={handleChange} className="form-control form-control-lg" placeholder="Email" required />
					</div>
				</div>

				<div className="form-footer">
					{
						error && (
							<div className="alert alert-danger">
								Ha ocurrido un error al enviar sus datos, por favor intente nuevamente
							</div>
						)
					}
					<button type="submit" className={`btn btn-lg btn-purple btn-block ${loading ? '-loading' : ''}`}>
						{
							loading ? (
								<div className="spinner-border text-light" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							) : (
									'¡Sí, Quiero Ver Mi Demo AHORA!'
								)
						}
					</button>
				</div>
				{
					captured && <MyModal clientData={clientData} showModal={captured} handleClose={handleClose} />
				}
			</form>
		</div>
	);
};

export default Form;
