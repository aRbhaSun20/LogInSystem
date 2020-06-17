import React, { Component } from "react";

import "../../Styles/App.css";
import "../../Styles/Main.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Logout extends Component {
	state = {
		Name : '',
		UniqueId : '', 
		Feedback : ''
	};
		IntialState = {};

	handleChange = (event) => {
		event.preventDefault();
		switch (event.target.id) {
			case "Name":
				this.IntialState.Name = event.target.value;
				break;
			case "UniqueId":
				this.IntialState.UniqueId = event.target.value;
				break;
			case "Feedback":
				this.IntialState.Feedback = event.target.value;
				break;
			default:
				break;
		}
	};

	HandleSubmit = (event) => {
		event.preventDefault();
		// this.props.LogoutData(this.IntialState);
		this.InitialState = this.state;
	};

	render() {
		return (
			<div className="Logout">
				<h2 className="Head_Logout">Logout</h2>
				<div c>
					<form action="" className="form">
						<div className="form-group row">
							<label for="" className="col-sm-2 col-form-label">
								Name
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="Name"
									className="form-control"
									id="Name"
									placeholder="Name"
									value={this.IntialState.Name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label for="" className="col-sm-2 col-form-label">
								UniqueId
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="UniueId"
									className="form-control"
									id="UniqueId"
									placeholder="UniqueId"
									value={this.IntialState.Name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label for="" className="col-sm-2 col-form-label">
								Feedback
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="Feedback"
									className="form-control"
									id="Feedback"
									placeholder="Feedback"
									value={this.IntialState.Name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div id="Submit_btn">
							<button
								value="Submit"
								onClick={this.HandleSubmit}
								className="btn btn-primary"
								id="Submit_btn"
							>
								Confirm
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Logout;
