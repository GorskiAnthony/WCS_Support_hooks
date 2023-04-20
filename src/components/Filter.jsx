const Filter = () => {
	return (
		<div className="filter">
			<input type="text" placeholder="🔍 Search for a country" />
			<select name="country" id="country" className="select">
				<option value="angleterre">Angleterre</option>
				<option value="belgique">Belgique</option>
				<option value="espagne">Espagne</option>
				<option value="france">France</option>
			</select>
		</div>
	);
};

export default Filter;
