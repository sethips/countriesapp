import React from 'react';
import './Country.css';

import numeral from 'numeral';
import 'numeral/locales';


const Country = ({ name, region, capitalCity, flag, population }) => {

	let [fontColor, bgColor] = checkCountryCardColor(region);
	
	return (
		<div className={`roboto fl w-20 ba b--black-50 br2 pa1 ma2 grow shadow-5 ${fontColor} ${bgColor} `}>
		  <div className="tc"><img alt={`${name}`} className='flag' src={`${flag}`}/></div>
		  <h4 className=" b-m f3 tc">{name}</h4>
		  <dl className="f6 lh-title mv2">
		    <dt className="dib b">Region: </dt>
		    <dd className="dib ml0 pl2">{region}</dd>
		  </dl>
		  <dl className="f6 lh-title mv2">
		    <dt className="dib b">Capital: </dt>
		    <dd className="dib ml0 pl2"> {capitalCity}</dd>
		  </dl>
		  <dl className="f6 lh-title mv2">
		    <dt className="dib b">Population: </dt>
		    <dd className="dib ml0 pl2"> {formatPopulation(population)}</dd>
		  </dl>		  
		</div>
	);
}

const formatPopulation = (pop) => {
	return numeral(pop).format('0,0');
}

const checkCountryCardColor = (regionName) => {
	switch (regionName) {
		case 'Asia':
			return ['black', 'bg-light-yellow'];
		case 'Europe':
			return ['yellow', 'bg-dark-blue'];
		case 'Africa':
			return ['light-yellow', 'bg-black'];
		case 'Oceania':
			return ['dark-green', 'bg-yellow'];
		case 'Americas':
			return ['dark-pink', 'bg-light-green'];
		case 'Polar':
			return ['near-black', 'bg-near-white'];			
		default:
			return ['near-black', 'bg-white'];
	}	
}

export default Country;