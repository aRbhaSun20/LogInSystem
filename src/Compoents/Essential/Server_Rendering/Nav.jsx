import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../Styles/App.css";

import img1 from "../../Images/4 hills_logo.png";

class Nav extends Component {

	render() {
		return (
			<div>
				<nav className="navBar">
					<Link to="/">
						<img src={img1} alt="Logo" className="Logo" />
					</Link>

					<ul className="Nav-link">
						<Link to="login">
							<li className="Link">Login</li>
						</Link>

						<Link to="logout">
							<li className="Link">Logout</li>
						</Link>
						<Link to="logindetails">
							<li className="Link">Login Details</li>
						</Link>
					</ul>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="18"
							viewBox="0 0 30 18"
							className="burger"
							onClick={this.handleClick}
						>
							<g
								id="Group_7"
								data-name="Group 7"
								transform="translate(-910 -360)"
							>
								<g id="Group_6" data-name="Group 6">
									<rect
										id="Rectangle_19"
										data-name="Rectangle 19"
										width="30"
										height="4"
										transform="translate(910 360)"
										fill="#707070"
									/>
									<rect
										id="Rectangle_20"
										data-name="Rectangle 20"
										width="8"
										height="4"
										transform="translate(910 367)"
										fill="#707070"
									/>
									<rect
										id="Rectangle_22"
										data-name="Rectangle 22"
										width="8"
										height="4"
										transform="translate(932 367)"
										fill="#707070"
									/>
									<rect
										id="Rectangle_23"
										data-name="Rectangle 23"
										width="8"
										height="4"
										transform="translate(921 367)"
										fill="#707070"
									/>
									<rect
										id="Rectangle_21"
										data-name="Rectangle 21"
										width="30"
										height="4"
										transform="translate(910 374)"
										fill="#707070"
									/>
								</g>
							</g>
						</svg>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
