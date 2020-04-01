import React, { Component } from 'react';
import '../assets/styles/Loading.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearState } from '../redux/Action'

class LogoutPage extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.clearState();
			this.props.history.push("/upcoming")
		}, 1500);
	}

	render() {
		return (
			<div className="d-flex flex-column justify-content-center h-100">
				<div className="container">
					<h1 className="text-center text-white mb-4">Logging out, please wait.</h1>
					<div  className="d-flex justify-content-center">
						<div className="loader" ></div>
					</div>
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
		clearState
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
