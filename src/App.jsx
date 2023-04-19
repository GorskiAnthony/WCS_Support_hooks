import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar />
			<Filter />
			<Card
				flag="https://picsum.photos/200/300"
				name="Germany"
				population="20000"
				capital="Tambouktou"
				region="Europe"
			/>
		</div>
	);
}

export default App;
