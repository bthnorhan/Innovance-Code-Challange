import React from 'react'
import { useSelector } from 'react-redux'
import {
	Link
  } from "react-router-dom";

const Header = () => {
	const isLoggedIn = useSelector(state => state.state.isLoggedIn)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand mb-0 h1 text-white font-weight-bold" to="/"><span role="img" aria-label="rocket">🚀</span> Launchrary</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav w-100">
					<Link className="nav-item nav-link text-white" to="/upcoming">Upcoming Launches</Link>
					<Link className="nav-item nav-link text-white" to="/about">About</Link>
					{
						isLoggedIn ?
						<>
							<Link className="nav-item nav-link text-white  ml-auto" to="/profile">Profile</Link>
							<Link className="nav-item nav-link text-white" to="/logout">Log Out</Link>
						</> :
						<Link className="nav-item nav-link text-white ml-auto" to="/login">Login</Link>
					}
				</div>
			</div>
		</nav>
	)
}

export default Header;
