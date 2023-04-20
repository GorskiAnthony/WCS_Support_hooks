import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Card from "../components/Card";
const Home = ({ countries }) => {
	return (
		<>
			<Navbar />
			<Filter />
			<div className="app">
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
		</>
	);
};

export default Home;
