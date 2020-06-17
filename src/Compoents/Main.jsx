import React, { Component } from "react";
import Routes from "./Essential/Routes";

import "./Styles/App.css";


import BackEnd from "./BackEnd";

class Home extends Component {

	LoginData = (data) => {
		this.refs.backend.showAlert(data)
	};

	render() {
		return (
			<div>
				<Routes LoginData={this.LoginData} />
				{/* <BackEnd SendComp={this.LoginDetails} ref="backend" /> */}
			</div>
		);
	}
}

export default Home;
