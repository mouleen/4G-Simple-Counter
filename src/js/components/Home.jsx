import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">         
			<AlarmForm / >
			<SecondCounter / >
			<RegresiveCounter / >
			<ActionButtons / >
		</div>
	);
};

export default Home;