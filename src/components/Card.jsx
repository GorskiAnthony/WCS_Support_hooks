const Card = ({ flag, name, population, capital, region }) => {
	return (
		<div className="card">
			<div className="card-img">
				<img src={flag} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<p>
					<strong> Population :</strong> {population}
				</p>
				<p>
					<strong>Région :</strong> {region}{" "}
				</p>
				<p>
					<strong>Capitale :</strong> {capital}
				</p>
			</div>
		</div>
	);
};

export default Card;
