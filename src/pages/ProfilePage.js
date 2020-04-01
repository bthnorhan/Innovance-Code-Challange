import React, { Component } from 'react'
import '../assets/styles/custom.css';

import Header from '../components/Header';
import NetworkConstants from '../values/NetworkConstants';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeStar } from '../redux/Action';

import { MdStar, MdStarBorder } from "react-icons/md";

class ProfilePage extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	renderLaunch(launch, index) {
		return (
			<div className="card mb-4" key={index}>
				<div className="card-header d-flex flex-row align-items-center">
					<h4 className="mb-0">{launch[NetworkConstants.WINDOW_START]}</h4>
					{
						this.props.state.isLoggedIn ? (this.props.state.starIds.includes(launch.id) ? <MdStar size='1.5em' className="ml-auto" onClick={() => { this.props.removeStar(launch) }} /> : <MdStarBorder size='1.5em' className="ml-auto" />) : null
					}
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
					<h1 className="text-white mt-4">{`Welcome, ${this.props.state.user}`}</h1>
					<h2 className="text-white mt-2">Starred Launch(es)</h2>
					{
						this.props.state.stars.length > 0 ? this.props.state.stars.map((launch, index) => this.renderLaunch(launch, index)) :
							<div className="card p-4">
								<span>
									You haven't got starred launch.
								</span>
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
		removeStar
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);