import React from 'react';

const SearchBox = ({ searchChange }) => {
	return ( 
		<div className="ma2">
			<label htmlFor="name" className="f6 b db mb2">Search by Name</label>
			<input className="input-reset ba b--black-20 pa2 mb2 db w-100"
				id="name"
				type='search' 
				placeholder='search countries'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;