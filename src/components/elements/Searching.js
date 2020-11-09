import React, { useState }from 'react';

const Searching = ({onSearch}) => {

	const [search, setSearch] = useState("");

	const onInputChange = (value) => {
		setSearch(value);
		onSearch(value);
	}
	
	return(
		<div>
			<div className="container py-3 input-group flex-nowrap">
								
					<div className="input-group-prepend">
				    	<span className="material-icons input-group-text secondary-color primary-text" id="addon-wrapping">search</span>
				  	</div>
				  	<input type="text" className="form-control"
				  		placeholder="Search..." 
				  		aria-label="Username" 
				  		aria-describedby="addon-wrapping" 
				  		value={search}
				  		onChange = {e => onInputChange(e.target.value)}
				  	/>				  	
			</div>
		</div>
	);
}

export default Searching;