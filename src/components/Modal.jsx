const Modal = ({ show, name, email }) => {
	return (
		<div className={`modal ${show ? "show" : ""}`}>
			<div className="content">
				<h2>Felicitaciones {name},</h2>
				<p>te has suscribido con tu email {email} exitosamente</p>
			</div>
		</div>
	);
};

export default Modal;
