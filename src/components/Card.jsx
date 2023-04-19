const Card = (props) => {
	return (
		<div className="card">
			<img src={props.flag} alt={props.name} />
			<h1>{props.name}</h1>
			<p>Population : {props.population}</p>
			<p>Région : {props.region} </p>
			<p>Capitale : {props.capital}</p>
		</div>
	);
};

export default Card;
