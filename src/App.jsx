import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/** Pages */
import Home from "./pages/Home";
import Country from "./pages/Country";

/** App.css */
import "./App.css";

function App() {
	const [countries, setCountries] = useState([]);
	// const [loading, setLoading] = useState(true);
	const API = "https://restcountries.com/v3.1/all";

	/**
	 * useEffect(callback, dependances)
	 */
	useEffect(() => {
		axios
			.get(API)
			.then((response) => {
				setCountries(response.data);
				// setLoading(false);
			})
			.catch((e) => console.error(e));
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Home countries={countries} />} />
			{/**
			 * Il me faut une route qui a cette tête
			 * /BARBADOS
			 * avec `BARBADOS` qui peut changer.
			 * l'information qui va prendre en charge ce changement s'appel `country`
			 */}
			<Route path="/:country" element={<Country />} />
		</Routes>
	);
}

export default App;
