import React, { Component } from "react";

import "../../Styles/App.css";
import "../../Styles/Main.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
	state = {
		Name: "",
		Email: "",
		UniqueId: ",",
		Gender: "",
		Phone: "",
		Designation: "",
	};
	IntialState = {};

	handleChange = (event) => {
		event.preventDefault();
		switch (event.target.id) {
			case "Name":
				this.IntialState.Name = event.target.value;
				break;
			case "Email":
				this.IntialState.Email = event.target.value;
				break;
			case "Gender":
				this.IntialState.Gender = event.target.value;
				break;
			case "Phone":
				this.IntialState.Phone = event.target.value;
				break;
			case "Designation":
				this.IntialState.Designation = event.target.value;
				break;
			default:
				break;
		}
	};

	HandleSubmit = (event) => {
		event.preventDefault();
		// this.props.LoginData(this.IntialState);
		this.InitialState = this.state;
	};
	initialValue = [];
	render() {
		return (
			<div className="Login">
				<h2 className="Head_Login">Login</h2>

				<div >
					<form className="form">
						<div className="form-group row">
							<label htmlFor="" className="col-sm-2 col-form-label">
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
							<label htmlFor="" className="col-sm-2 col-form-label">
								Gender
							</label>
							<div className="col-sm-10">
								<select
									onChange={this.handleChange}
									value={this.initialValue[0]}
									name="Gender"
									className="form-control"
									id="Gender"
								>
									<option className="dropdown-menu" value="" disabled selected>
										Gender
									</option>
									<option className="dropdown-item" value="Skip">
										Skip
									</option>
									<option className="dropdown-item" value="Female">
										Female
									</option>
									<option className="dropdown-item" value="Male">
										Male
									</option>
									<div role="separator" className="dropdown-divider"></div>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="" className="col-sm-2 col-form-label">
								Email
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="Email"
									className="form-control"
									id="Email"
									placeholder="Email"
									value={this.IntialState.Email}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="" className="col-sm-2 col-form-label">
								Phone_Number
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="Phone"
									className="form-control"
									id="Phone"
									placeholder="Phone Number"
									value={this.IntialState.Phone}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="" className="col-sm-2 col-form-label">
								Designation
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									name="PhonDesignation"
									className="form-control"
									id="Designation"
									placeholder="Designation"
									value={this.IntialState.Designation}
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

export default Login;
