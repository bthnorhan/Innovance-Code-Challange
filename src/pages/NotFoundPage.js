import React, { Component } from 'react';

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="d-flex flex-column justify-content-center h-100">
				<div className="container">
					<h1 className="text-center text-white mb-4">Looks like you lost in space.</h1>
					<button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>this.props.history.push("/")}>Teleport</button>
				</div>
			</div>
		)
	}
}
