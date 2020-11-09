import React, {useState, useEffect, useMemo} from 'react';

const Pagination = ({total = 0, itemsPerPage = 5, currentPage = 1, onPageChange}) => {

	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		if(total > 0 && itemsPerPage > 0) 
			setTotalPages(Math.ceil( total / itemsPerPage ));
	},[ total, itemsPerPage ])
	

	const pagination = useMemo(() => {
		const pages = [];

		for(let i=1; i <= totalPages; i++){
			pages.push(<li className={`page-item ${i === currentPage ? "active" : null}`}
				 key={i}
				 onClick={() => onPageChange(i)}
			>
		    	<div className="page-link primary-text">{i}</div>
		    </li>);
		}

		return pages;
	}, [ totalPages, currentPage])

	if(totalPages === 0) return null;

	return(
		<div className="container d-flex justify-content-center">
			<nav aria-label="Page navigation example">
			  <ul className="pagination">
			    <li className="page-item">
			    	<button className="page-link primary-text font-weight-bold"
				    	onClick={() => onPageChange( currentPage - 1 ) }>
				    	Previous
				    </button>
				</li>	    
			    	{pagination}			    	
			    <li className="page-item">
			    	<button className="page-link primary-text font-weight-bold" 
			    	onClick={() => onPageChange( currentPage + 1 ) }>
			    		Next
			    	</button>
			    </li>
			  </ul>
			</nav>
		</div>
	);
}

export default Pagination;