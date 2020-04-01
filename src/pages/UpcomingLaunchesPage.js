import React, { Component } from 'react'
import '../assets/styles/custom.css';

import Header from '../components/Header';
import NetworkConstants from '../values/NetworkConstants';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class UpcomingLaunchesPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			launches: [],
			offset: 0,
			isLoading: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

		this.getLaunches();
	}

	handleScroll = (event) => {
		if ((window.scrollY / event.target.body.scrollHeight) > 0.90 && !this.state.isLoading) {
			console.log("Fetching launches.");
			this.getLaunches();
		}
	}

	getLaunches() {
		if (!this.state.isLoading) {
			this.setState({
				isLoading: true
			})

			let encodedValue = "?" + NetworkConstants.NEXT10 + "&" + NetworkConstants.OFFSET + "=" + this.state.offset + NetworkConstants.LAUNCH_FILTER;
			fetch(NetworkConstants.BASE_URL + NetworkConstants.LAUNCH + encodedValue, {
				method: 'GET'
			})
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);

					this.setState({
						launches: [...this.state.launches, ...responseJson.launches],
						offset: this.state.offset + responseJson.count,
						isLoading: false
					})
				})
				.catch((error) => {
					this.setState({
						isLoading: false
					})
					console.log(error)
				})
		}
	}

	renderLaunch(launch, index) {
		return (
			<Link to={`/launch/${launch.id}`} key={index}>
				<div className="card mb-4">
					<div className="card-header d-flex flex-row align-items-center">
						<h4 className="mb-0">{launch[NetworkConstants.WINDOW_START]}</h4>
					</div>
					<img src={launch[NetworkConstants.ROCKET][NetworkConstants.IMAGE_URL]} className="card-img-top" alt={launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}></img>
					<div className="card-body">
						<h5 className="card-title">{launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}</h5>
						<p className="card-text">{launch[NetworkConstants.LOCATION][NetworkConstants.PADS][0][NetworkConstants.NAME]}</p>
					</div>
				</div>
			</Link>
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

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(UpcomingLaunchesPage);