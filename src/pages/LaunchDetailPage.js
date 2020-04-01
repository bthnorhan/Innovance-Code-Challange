import React, { Component } from 'react'
import '../assets/styles/custom.css';
import '../assets/styles/Loading.css';

import Header from '../components/Header';
import NetworkConstants from '../values/NetworkConstants';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStar, removeStar } from '../redux/Action';

import { MdStar, MdStarBorder } from "react-icons/md";

class LaunchDetailPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: '',
			launch: null,
			isLoading: false
		}

	}

	componentDidMount() {
		this.setState({
			id: this.props.match.params.id
		}, () => this.getLaunchDetail())
	}

	getLaunchDetail() {
		if (!this.state.isLoading) {
			this.setState({
				isLoading: true
			})

			let encodedValue = "?" + NetworkConstants.ID + "=" + this.state.id + NetworkConstants.LAUNCH_FILTER;
			fetch(NetworkConstants.BASE_URL + NetworkConstants.LAUNCH + encodedValue, {
				method: 'GET'
			})
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);

					this.setState({
						launch: responseJson.launches[0],
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

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header />
				<div className="container h-100">
					<h2 className="text-white mt-4">Launch Detail</h2>
					{
						this.state.launch ?
							<div className="card mb-4" key={this.state.id}>
								<div className="card-header d-flex flex-row align-items-center">
									<h4 className="mb-0">{this.state.launch[NetworkConstants.WINDOW_START]}</h4>
									{
										this.props.state.isLoggedIn ? (this.props.state.starIds.includes(this.state.launch.id) ? <MdStar size='1.5em' className="ml-auto" onClick={() => { this.props.removeStar(this.state.launch) }} /> : <MdStarBorder size='1.5em' className="ml-auto" onClick={() => { this.props.addStar(this.state.launch) }} />) : null
									}
								</div>
								<img src={this.state.launch[NetworkConstants.ROCKET][NetworkConstants.IMAGE_URL]} className="card-img-top" alt={this.state.launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}></img>
								<div className="card-body">
									<h5 className="card-title">{this.state.launch[NetworkConstants.ROCKET][NetworkConstants.NAME]}</h5>
									<p className="card-text">{this.state.launch[NetworkConstants.LOCATION][NetworkConstants.PADS][0][NetworkConstants.NAME]}</p>
									<p className="card-text">For more information : <a href={this.state.launch[NetworkConstants.ROCKET][NetworkConstants.WIKI_URL]} rel="noopener noreferrer" target="_blank">{this.state.launch[NetworkConstants.ROCKET][NetworkConstants.WIKI_URL]}</a></p>
								</div>
							</div> :
							<div className="d-flex justify-content-center">
								<div className="loader" ></div>
							</div>
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
		addStar,
		removeStar
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LaunchDetailPage);