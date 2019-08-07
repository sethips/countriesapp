import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="roboto pa4 black-80 flex ">
			{props.children}
		</div>
	);
};

export default SearchBar;