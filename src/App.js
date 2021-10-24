import React from "react";
import "./App.css";

import Navbar from "./componentes/navbar/Navbar";
import Inicio from "./componentes/inicio/Inicio";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Inicio />
		</div>
	);
}

export default App;
