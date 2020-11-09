import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Editcontact from './components/contacts/Editcontact';

function App() {
  return (
  	<Provider store={store}>
  		<Router>
		    <div className="App">
		      <Navbar />
		      <div className="container py-3">
		      	
		      	<Switch>
		        	<Route exact path="/" component={Contacts} />
		        	<Route exact path="/contact/add" component={AddContact} />
		        	<Route exact path="/contact/edit/:id" component={Editcontact} />
		        </Switch>
		      </div>
		    </div>
	    </Router>
    </Provider>
  );
}

export default App;
