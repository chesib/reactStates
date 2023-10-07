import React from "react";

const SocialButton = ({ lnk, face, git }) => {
	return (
		<div>
			<div className="btn-container">
				<div></div>
				<div></div>
			</div>
			<h1 className="tittle">Crea tu cuenta</h1>
			<div className="icons-menu">
				<p className="icons">{face}</p>
				<p className="icons">{git}</p>
				<p className="icons">{lnk}</p>
			</div>
			<h6>o usa tu email para registrarte</h6>
		</div>
	);
};

export default SocialButton;
