import { React, Component } from "react";
import socketIOClient from "socket.io-client";


class BackEnd extends Component {
	constructor() {
		super();
		this.state = {
			response: false,
			endpoint: "localhost:4001",
		};
	}

	LoginData = {};

	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);
		socket.on("FromAPI", () => console.log("connected to backend"));
	}
	success = false;

	showAlert = (LoginData) => {
		this.LoginData = LoginData;
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);

		socket.emit("login", this.LoginData);
		socket.on("Success", () => {
			console.log("write Success");
			this.success = true;
		});
	};

	
	render() {
		return (
			<div>
				<h1>success</h1>
			</div>
		);
	}
}

export default BackEnd;
