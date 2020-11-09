import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
	return(
		<div>
			<nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary primary-color">
				<div className="container">
					
						    <Link to="/" className="navbar-brand">Contact Book
						    </Link>
						
						
						    <div>
						  		<Link to="/contact/add" className="btn btn-light main-color ml-auto">Add Contact</Link>
						  	</div>
						
					
				</div>
			</nav>
		</div>
	)
}

export default Navbar;