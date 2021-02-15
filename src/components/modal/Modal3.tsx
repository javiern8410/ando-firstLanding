import React, { FunctionComponent } from 'react';
import { Modal, Button } from "react-bootstrap";

const MyModal: FunctionComponent<any> = ({ showModal, handleClose, clientData, children }) => {

	return (
		<Modal show={showModal} onHide={handleClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title>Exito</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <h6 style={{display: 'inline'}}>{clientData.FNAME}</h6>
				<p style={{display: 'inline'}}>
					, gracias por completar el formulario,
					en breve recibirás un correo electrónico donde podrá acceder a nuestras ofertas.
				</p> */}
				{children}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MyModal;
