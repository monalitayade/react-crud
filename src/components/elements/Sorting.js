import React, { useState } from 'react';

const Sorting = ({onSelect}) => {

	const options = [{value:"name"}, {value:"email"}]

	const [getValue, setGetValue] = useState("");

	const onInputSelect = (value) => {
		setGetValue(value);
		onSelect(value);
		console.log("sorting",value);
	}

	
	return(
		<div className="container py-3 input-group flex-nowrap">
			<div className="form-group">
			    <label>Sortby Name</label>
			    <select className="form-control" id="exampleFormControlSelect1" 
			    	onChange = {e => onInputSelect(e.target.value)}>
			      {
			      	options.map((option,index) => (
			      		<option value={option.value} key={index}>
			      			{option.value}
			      		</option>
			      	))
			      }
			    </select>
			  	</div>
		</div>
	)
}

export default Sorting;