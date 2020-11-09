import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';
import Contact from './Contact';
import Search from '../elements/Searching';
import Pagination from '../elements/Pagination';
import Sorting from '../elements/Sorting';

const Contacts = () => { 

	const contacts = useSelector(state => state.contacts.contacts);	
	const header = [
		{name: "fname" , field:"First Name", sortable:true},
		{name: "pnum" , field:"Phone number", sortable:false},
		{name: "email" , field:"Email", sortable:false}
	]

	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const  ITEMS_PER_PAGE = 5;

	const [search, setSearch] = useState("");

	const [getValue, setGetValue] = useState("");

	const [sorting, setSorting] = useState({field:"", order:""});
	
	const contactsData = useMemo(() => {
		let computedData = contacts;		

		if(search){
			//console.log(search);
			computedData = computedData.filter(
				data => 
				data.name.toLowerCase().includes(search.toLowerCase())
			)
		}

		if(getValue){
				function GetSortOrder(prop) {    
				    return function(a, b) {    
				        if (a[prop] > b[prop]) {    
				            return 1;    
				        } else if (a[prop] < b[prop]) {    
				            return -1;    
				        }    
				        return 0;    
				    }    
				}  

				const sortData = computedData.sort(GetSortOrder(getValue));
				console.log(sortData);
			}

		setTotalItems(computedData.length);
		return computedData.slice(
			(currentPage - 1) * ITEMS_PER_PAGE,
			(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
		);
		
	},[contacts, currentPage, search, getValue]);
	
	return(
		<div>
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<Search onSearch = {(value) => {
						setSearch(value);
						setCurrentPage(1);
					}}/>
				</div>
				<div className="col-md-6">
					<Sorting onSelect = {(value) => {
						setGetValue(value);
					}}/>
				</div>
			</div>
		</div>
		<table className="table shadow">
		  <thead className="secondary-color">
		  	<tr>
			  	{
			  		header.map((title,index) => (			  			
				      	<th scope="col" key={index}>{title.field}
				      	</th>				    	
			  		))
				}
				<th>Actions</th>
			</tr>
		  </thead>
		  <tbody>
		    {
		    	contactsData.map((contact) => (
		    		<Contact contact={contact} key={contact.id}/>
		   		))
		    }
		    
		  </tbody>
		</table>

		<Pagination 
			total={totalItems}
			itemsPerPage={ITEMS_PER_PAGE}
			currentPage={currentPage}
			onPageChange={page => setCurrentPage(page)}
		/>
		</div>
	);
}
export default Contacts;