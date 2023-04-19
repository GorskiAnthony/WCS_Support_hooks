const Card = ({ flag, name, population, capital, region }) => {
	return (
		<div className="card">
			<img src={flag} alt={name} />
			<h1>{name}</h1>
			<p>Population : {population}</p>
			<p>Région : {region} </p>
			<p>Capitale : {capital}</p>
		</div>
	);
};

export default Card;
