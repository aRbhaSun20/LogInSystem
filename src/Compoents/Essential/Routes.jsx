import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Nav from "./Server_Rendering/Nav";
import Home from "./Server_Rendering/Home";
import Login from "./Server_Rendering/Login";
import Logout from './Server_Rendering/Logout'
import LoginDetails from './Server_Rendering/LoginDetails'


class Routes extends Component {
	state = {};
	render() {
		return (
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path="/" exact component={Home}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/logout" component={Logout}></Route>
						<Route path="/logindetails" component={LoginDetails}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routes;
