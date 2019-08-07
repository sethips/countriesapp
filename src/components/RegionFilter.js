import React from 'react';

const RegionFilter = ({ regionChange }) => {



	return ( 
		<div className="ma2">
			<label htmlFor="region" className="f6 b db mb2">Filter by Region</label>
			<select className="ba b--black-20 pa2 mb2 db w-100" name="region" onChange={regionChange}>
				<option value="">Filter by Region</option>
	            <option value="Asia">Asia</option>
	            <option value="Europe">Europe</option>
	            <option value="Africa">Africa</option>
	            <option value="Oceania">Oceania</option>
	            <option value="Americas">Americas</option>
	            <option value="Polar">Polar</option>
			</select>
		</div>
	);
}

export default RegionFilter;