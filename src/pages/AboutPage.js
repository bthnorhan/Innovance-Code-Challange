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
							<span>
								Launchrary is free to use application. You can follow upcoming launches. Star your favorite launch(es).
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}