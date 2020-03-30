import React, { Component } from 'react'
import '../assets/styles/UpcomingLaunches.css';

import Header from '../components/Header';
import NetworkConstants from '../values/NetworkConstants';

export default class UpcomingLaunchesPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			launches: [],
			offset: 0,
		}
	}

	componentDidMount() {
		this.getLaunches();
	}

	getLaunches() {
		let encodedValue = "/" + NetworkConstants.NEXT10 + "?" + NetworkConstants.OFFSET + "=" + this.state.offset + NetworkConstants.LAUNCH_FILTER;;
		fetch(NetworkConstants.BASE_URL + NetworkConstants.LAUNCH + encodedValue, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);

				this.setState({
					launches: [...this.state.launches, ...responseJson.launches],
					offset: this.state.offset + responseJson.count
				})
			})
			.catch((error) => {
				this.setState({
					isLoading: false
				})
				console.log(error)
			})
	}

	renderLaunch(launch, index) {
		return (
			<div className="card mb-4" key={index}>
				<div className="card-header h4">
					{launch[NetworkConstants.WINDOW_START]}
				</div>
				<img src={launch[NetworkConstants.ROCKET][NetworkConstants.IMAGE_URL]} className="card-img-top" alt={launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}></img>
				<div className="card-body">
					<h5 className="card-title">{launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}</h5>
					<p className="card-text">{launch[NetworkConstants.LOCATION][NetworkConstants.PADS][0][NetworkConstants.NAME]}</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header />
				<div className="container h-100">
					<h2 className="text-white mt-4">Upcoming Launches</h2>
					{
						this.state.launches.map((launch, index) => this.renderLaunch(launch, index))
					}
				</div>
			</div>
		)
	}
}