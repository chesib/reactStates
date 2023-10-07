import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
	return (
		<div className="fathercard">
			<div className="card">
				<SocialButton
					face={<FontAwesomeIcon icon={faFacebookF} />}
					git={<FontAwesomeIcon icon={faGithub} />}
					lnk={<FontAwesomeIcon icon={faLinkedinIn} />}
				></SocialButton>

				<Formulario></Formulario>
			</div>
		</div>
	);
};

export default Registro;
