import React, { Component } from 'react'
import '../assets/styles/custom.css';

import Header from '../components/Header';
import NetworkConstants from '../values/NetworkConstants';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLaunches } from '../redux/Action';

import { Link } from 'react-router-dom';

class UpcomingLaunchesPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false
		}

		this.lastLaunch = React.createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

		this.getLaunches();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		if ((window.scrollY / event.target.body.scrollHeight) > ((this.lastLaunch.current.offsetTop - (this.lastLaunch.current.offsetHeight * 2)) / event.target.body.scrollHeight) && !this.state.isLoading) {
			console.log("Fetching launches.");
			this.getLaunches();
		}
	}

	getLaunches() {
		if (!this.state.isLoading) {
			this.setState({
				isLoading: true
			})

			let encodedValue = "?" + NetworkConstants.NEXT10 + "&" + NetworkConstants.OFFSET + "=" + this.props.state.launches.length + NetworkConstants.LAUNCH_FILTER;
			fetch(NetworkConstants.BASE_URL + NetworkConstants.LAUNCH + encodedValue, {
				method: 'GET'
			})
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);

					this.props.addLaunches(responseJson.launches);

					this.setState({
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
			<Link to={`/launch/${launch.id}`} key={index} ref={this.lastLaunch}>
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
						this.props.state.launches.map((launch, index) => this.renderLaunch(launch, index))
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		addLaunches
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunchesPage);