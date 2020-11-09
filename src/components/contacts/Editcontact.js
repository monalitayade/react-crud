import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, updateDetail} from "../../actions/actions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Editcontact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contact);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getDetail(id));
  }, [contact]);

  const onUpdateDetail = (e) => {
    e.preventDefault();

    const update_detail = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });

    dispatch(updateDetail(updateDetail));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <h4 className="card-header primary-color main-text font-weight-bold text-transform">
        Update Details
      </h4>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateDetail(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone || ''}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn primary-color main-text text-transform" type="submit">
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editcontact;