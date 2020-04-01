import React, { Component } from 'react';
import Header from '../components/Header';

export default class AboutPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
		}
	}

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header />
				<div className="d-flex flex-column justify-content-center h-100">
					<div className="container">
						<h2 className="text-white">About</h2>
						<div className="card p-4">
							<span className="card-text">
								You can follow upcoming launches all around world with this app which is developed React js. You can access launch date, location, rocket image and details. It is free to use. You can save and access your favorite launch at profile after login.
							</span>
							<span className="font-weight-bold card-text mt-4">Used Technologies</span>
							<span className="card-text">
								React JS, Redux, Bootstrap, Javascript(ES6+ as much as possible), Github Pages, Git, Trello.
							</span>
							<span className="font-weight-bold card-text mt-4">Author</span>
							<span className="card-text">
								Batuhan Orhan
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}