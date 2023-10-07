import React, { useState } from "react";
import { validateName, validateEmail } from "../utils/utils";
import Modal from "./Modal";

const Formulario = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [psw, setPsw] = useState("");
	const [confirmPsw, setConfirmPsw] = useState("");
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateName(nombre)) {
			setError("* El nombre contiene caracteres inválidos");
			return;
		}
		if (psw !== confirmPsw) {
			setError("* Las contraseñas no coinciden");
			return;
		}
		if (!validateEmail(email)) {
			setError("* El correo no es válido");
			return;
		}
		console.log("Nombre:", nombre);
		console.log("Email:", email);
		console.log("Contraseña:", psw);
		console.log("Confirmación de Contraseña:", confirmPsw);
		setError("");
		setShow(true);
	};
	return (
		<div>
			<form className="form-container" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre"></label>
					<input
						placeholder="nombre"
						required
						type="text"
						id="nombre"
						onChange={(e) => setNombre(e.target.value)}
						value={nombre}
					/>
				</div>

				<div>
					<label htmlFor="email"></label>
					<input
						placeholder="tuemail@gmail.com"
						type="email"
						required
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>

				<div>
					<label htmlFor="password"></label>
					<input
						placeholder="password"
						type="password"
						id="password"
						required
						onChange={(e) => setPsw(e.target.value)}
						value={psw}
					/>
				</div>
				<div>
					<label htmlFor="confirmacionContrasena"></label>
					<input
						placeholder="confirma contraseña"
						type="password"
						id="confirmacionContrasena"
						required
						onChange={(e) => setConfirmPsw(e.target.value)}
						value={confirmPsw}
					/>
				</div>
				<button type="submit">Register</button>
				<p className="error">{error}</p>
			</form>
			<Modal show={show} name={nombre} email={email}></Modal>
		</div>
	);
};

export default Formulario;
