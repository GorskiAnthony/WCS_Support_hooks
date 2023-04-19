import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";
import "./App.css";

function App() {
	const [countries, setCountries] = useState([]);
	const API = "https://restcountries.com/v3.1/all";

	/**
	 * useEffect(callback, dependances)
	 */
	useEffect(() => {}, []);

	/**
	 * Create = POST
	 * Read = GET
	 * Update = PUT
	 * Delete = DELETE
	 */

	axios.get(API).then((response) => setCountries(response.data));

	return (
		<div>
			<Navbar />
			<Filter />

			<div className="cards">
				{countries.map((country) => (
					<Card
						flag="https://picsum.photos/200/300"
						name="Germany"
						population="20000"
						capital="Tambouktou"
						region="Europe"
					/>
				))}
				{/* {countries.map((country) => {
				return (
					<Card
						flag="https://picsum.photos/200/300"
						name="Germany"
						population="20000"
						capital="Tambouktou"
						region="Europe"
					/>
				)
			})} */}
			</div>
		</div>
	);
}

export default App;
