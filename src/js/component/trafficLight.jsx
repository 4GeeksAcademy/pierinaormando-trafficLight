import React, {useState} from "react";


//create your first component
const trafficLight = () => {

	const [color, setColor] = useState("");

	return (
		<div className="container">
			<h1 className="text-center mt-5">Traffic Light</h1>
			
			
		</div>
	);
};

export default trafficLight;
