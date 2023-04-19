import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";
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

	console.log(countries);

	/**
	 * Create = POST
	 * Read = GET
	 * Update = PUT
	 * Delete = DELETE
	 */

	return (
		<div>
			<Navbar />
			<Filter />

			<div className="cards">
				{countries.map((country, id) => (
					<Card
						key={id}
						flag={country.flags.png}
						name={country.name.common}
						population={country.population}
						capital={country.capital}
						region={country.region}
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
