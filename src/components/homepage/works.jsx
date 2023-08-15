import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiencia Laboral"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./nttdata.png"
								alt="nttdata"
								className="work-image"
							/>
							<div className="work-title">NTT Data</div>
							<div className="work-subtitle">
								Salesforce Junior Developer
							</div>
							<div className="work-duration">Octubre 2021 - Febrero 2022</div>
						</div>

						<div className="work">
							<img
								src="./deloitte.png"
								alt="deloitte"
								className="work-image"
							/>
							<div className="work-title">Deloitte</div>
							<div className="work-subtitle">
								Salesforce Consultant
							</div>
							<div className="work-duration">Marzo 2022 - Presente</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
