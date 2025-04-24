import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">         
			<SecondCounter / >
			<RegresiveCounter / >
		</div>
	);
};

export default Home;