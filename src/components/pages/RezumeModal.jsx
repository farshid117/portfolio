import { Modal } from "react-bootstrap";
import React from 'react';

const RezumeModal = ({ show, fullscreen, handleShowModal,title, setShow, headerColor, bodyColor, children }) => {
    return (
        <Modal show={show} fullscreen={fullscreen} onClick={handleShowModal} onHide={() => setShow(false)} style={{ color: "#fff" }}>
            <Modal.Header style={{ background: headerColor }} >
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: bodyColor }}>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default RezumeModal;
