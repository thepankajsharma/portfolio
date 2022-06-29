import React from "react";
import "../assets/css/App.css";
import Home from "./components/Home/Home";

function App() {
	console.log("App");

	return (
		<>
			<Home />
		</>
	);
}

const apps = React.memo(App);

export default apps;
