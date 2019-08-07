import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
	return (
		<div className="flex flex-wrap">
		{ 
		countries.map((country, i) => {
			return (<Country key={i} 
				name={countries[i].name} 
				region={countries[i].region}
				capitalCity={countries[i].capital}
				flag={countries[i].flag}
				population={countries[i].population}
				area={countries[i].area}
				/>
			)
		})  
		}
		</div>
	)
}

export default CountryList;