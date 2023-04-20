import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

/** Components */
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Country = () => {
	const [name, setName] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { country } = useParams();
	const API = "https://restcountries.com/v3.1/name/";

	useEffect(() => {
		axios
			.get(API + country)
			.then((res) => {
				console.log(res);
				setName(res.data[0]);
				setIsLoading(false);
			})
			.catch((e) =>
				console.error(
					"ton erreur : ",
					e.response.status,
					" | ",
					e.response.statusText
				)
			);
		// .finally(() => {
		// 	setIsLoading(false);
		// })
	}, []);

	/**
	 * 1/ initialisation ❌ (avec le isLoading ✅)
	 * 2/ montage
	 * 3/ update
	 * 4/ démontage
	 */

	const toto = name.flags ? name.flags : ""
	if (isLoading) return <div>Je charge</div>;

	return (
		<>
			<Navbar />
			<Filter />
			<button>
				<Link to="/">Je reviens à la home page</Link>
			</button>
			<div className="app">
				<div className="cards">
					<Card
						flag={name.flags.png}
						name={name.name.common}
						population={name.population}
						capital={name.capital}
						region={name.region}
					/>
				</div>
			</div>
		</>
	);
};

export default Country;
