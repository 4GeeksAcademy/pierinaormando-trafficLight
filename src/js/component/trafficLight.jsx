import React, { useState } from "react";


//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState("");

	return (
		<div className="container">
			<h1 className="text-center mt-5">Traffic Light</h1>
			<div>
				<div className="traffic-light">
					<input className={color == "colorRed" ? "colorRed selected" : "colorRed"} type="radio" onClick={() => {
						setColor("colorRed")
					}}/>

					<input className={color == "colorYellow" ? "colorYellow selected" : "colorYellow"} type="radio" onClick={() => {
						setColor("colorYellow")
					}} />

					<input className={color == "colorGreen" ? "colorGreen selected" : "colorGreen"} type="radio" onClick={() => {
						setColor("colorGreen")
					}}/>

				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
