import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
	const isLoggedIn = useSelector(state => state.state.isLoggedIn)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand mb-0 h1 text-white font-weight-bold" href="/"><span role="img" aria-label="rocket">🚀</span> Launchrary</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav w-100">
					<a className="nav-item nav-link text-white" href="/">Upcoming Launches</a>
					<a className="nav-item nav-link text-white" href="/about">About</a>
					{
						isLoggedIn ?
						<>
							<a className="nav-item nav-link text-white  ml-auto" href="/profile">Profile</a>
							<a className="nav-item nav-link text-white" href="/logout">Log Out</a>
						</> :
						<a className="nav-item nav-link text-white ml-auto" href="/login">Login</a>
					}
				</div>
			</div>
		</nav>
	)
}

export default Header;
