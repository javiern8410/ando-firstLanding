import React, { useState, FunctionComponent, useRef } from "react";
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

	const captureForm : any = useRef(null);

	const handleSubmit = (event: any) => {
		setLoading(true);
		event.preventDefault();
		captureForm.current.submit();	
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setClientData({ ...clientData, [name]: value });
	}

	return (
		<div className="form-container" id="capture-form">
			<form ref={captureForm} method="post" onSubmit={handleSubmit} action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe" target="_self">
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
			</form>
		</div>
	);
};

export default Form;
