import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import {addDetail} from '../../actions/actions';
import shortid from 'shortid'; 
import {useHistory} from 'react-router-dom';

const AddContact = () => {
	let history = useHistory();
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const createContact = e => {
		e.preventDefault();
		console.log(name,phone,email);
		const new_Detail = {
			id:shortid.generate(),
			name:name,
			phone:phone,
			email:email,
		};
		dispatch(addDetail(new_Detail));
		history.push("/");
	}
	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="card border-0 shadow">
						<h4 className="card-header primary-color main-text font-weight-bold text-transform">
							Add Details
						</h4>
						<div className="card-body">
							<form onSubmit={(e) => createContact(e)}>
								<div className="form-group">
									<input type="text" className="form-control"
									    placeholder="Enter name"
									    value={name}
									    onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control"
									    placeholder="Enter phone"
									    value={phone}
									    onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control"
									    placeholder="Enter email"
									    value={email}
									    onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<button className="btn primary-color main-text text-transform" type="submit">Add Details</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddContact;