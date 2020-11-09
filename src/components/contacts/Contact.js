import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { deleteDetail } from "../../actions/actions";
import { useDispatch } from "react-redux";

const Contact = ({contact}) => {
	const dispatch = useDispatch();
	const {id, name, phone, email} = contact;

	return(
		<tr>
	      <td>{name}</td>
	      <td>{phone}</td>
	      <td>{email}</td>
	      <td>
	      	<Link to={`/contact/edit/${id}`}><span className="material-icons secondary-text mx-2">edit</span></Link>
	      	<span className="material-icons 
	      		secondary-text" onClick={()=>dispatch(deleteDetail(id))}>remove_circle
	      	</span>
	      </td>
	    </tr>
	);
}

export default Contact;