import React, { Component } from 'react';
import '../assets/styles/Loading.css';

export default class LoadingPage extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.history.push("/upcoming")
		}, 1500);
	}

	render() {
		return (
			<div className="d-flex flex-column justify-content-center h-100">
				<div className="container">
					<h1 className="text-center text-white mb-4">Launches loading, please wait.</h1>
					<div  className="d-flex justify-content-center">
						<div className="loader" ></div>
					</div>
				</div>
			</div>
		)
	}
}
