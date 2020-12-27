import React, { useState, FunctionComponent } from "react";
import MyModal from '../modal/Modal'
import FormData from 'form-data';
import { ApiClient } from '../../clients/api.client';
import "./quialification-form.scss";

const initialState = {
	FNAME: '',
	EMAIL: '',
    TEXT: '',
    LONGTEXT: ''
}

const QualificationForm: FunctionComponent<any> = () => {
	const [clientData, setClientData] = useState(initialState)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false);
	const [captured, setCaptured] = useState(false)

	const handleSubmit = async (event: any) => {
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
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setClientData({ ...clientData, [name]: value });
	}

	const handleClose = () => {
		setCaptured(false);
	}

	return (
		<div className="quialification-form" id="capture-form">
			{/* <form id="capture" target="_blank" method="post" action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe"> */}
			<form id="capture" method="post" onSubmit={handleSubmit}>
				<div className="form-title">
					<h6 className="emfasis">
						¡DESCUBRE LA POTENCIA QUE LE DAMOS A TU NEGOCIO!
					</h6>
					<p>
						Accede al demo que hemos preparado exclusivamente apara ti ahora.
					</p>
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

                    <div>
						<label>Teléfono (WhatsApp)</label>
					</div>
					<div>
						<input type="tel" name="PHONE" onChange={handleChange} className="form-control form-control-lg" placeholder="Teléfono" required />
					</div>

                    <div>
						<label>País de la Agencia</label>
					</div>
					<div>
						<input type="text" name="country" onChange={handleChange} className="form-control form-control-lg" placeholder="País de la Agencia" required />
					</div>

                    <div>
						<label># Reservas propemdio al mes</label>
					</div>
					<div>
						<input type="text" name="reservas" onChange={handleChange} className="form-control form-control-lg" placeholder="Introduce tus datos" required />
					</div>

                    <div>
						<label>Principal Mercado</label>
					</div>
					<div>
						<input type="text" name="reservas" onChange={handleChange} className="form-control form-control-lg" placeholder="Introduce tus datos" required />
					</div>
				</div>

				<div className="form-footer">
					<div className="counter">
						1:00:00
					</div>
					<div>
						{
							error && (
								<div className="alert alert-danger">
									Ha ocurrido un error al enviar sus datos, por favor intente nuevamente
								</div>
							)
						}
						<button type="submit" className={`btn-free-month  ${loading ? '-loading' : ''}`}>
							{
								loading ? (
									<div className="spinner-border text-light" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								) : (
										'Enviar'
									)
							}
						</button>
					</div>
				</div>
				{
					captured && <MyModal clientData={clientData} showModal={captured} handleClose={handleClose} />
				}
			</form>
		</div>
	);
};

export default QualificationForm;
