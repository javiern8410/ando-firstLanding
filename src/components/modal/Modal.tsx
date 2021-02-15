import React, { FunctionComponent } from 'react';
import { Modal } from "react-bootstrap";
import "./modal.scss";

const MyModal: FunctionComponent<any> = ({ showModal, handleClose, children }) => {

	return (
		<Modal className="modal-component" show={showModal} onHide={handleClose} animation={false}>
			<Modal.Body className="video">
				{children}
			</Modal.Body>
		</Modal>
	);
};

export default MyModal;
