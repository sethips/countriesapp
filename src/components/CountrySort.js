import React from 'react';

const CountrySort = ({ sortChange }) => {
	return ( 
		<div className="ma2">
			<label htmlFor="region" className="f6 b db mb2">Sort by</label>
			<select className="ba b--black-20 pa2 mb2 db w-100" name="region" onChange={sortChange}>
	            <option value="name">Name</option>
	            <option value="population">Population</option>
	            <option value="area">Area</option>
			</select>
		</div>
	);
}

export default CountrySort;