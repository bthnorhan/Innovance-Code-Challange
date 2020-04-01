import React, { Component } from 'react';
import Helper from '../Helper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoggedIn, setUser } from '../redux/Action';

class LoginPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			errors: {
				email: '',
				password: ''
			}
		}
	}


	login = (event) => {
		event.preventDefault();

		if (this.state.errors.email.length === 0 && this.state.errors.password.length === 0) {
			this.props.setLoggedIn(true);
			this.props.setUser(this.state.email);
			this.props.history.push("/");
		}
	}

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case 'email':
				errors.email = Helper.validateEmail(value) ? '' : 'Email is not valid!';
				break;
			case 'password':
				errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value })
	}

	render() {
		return (
			<div className="d-flex flex-column justify-content-center h-100">
				<div className="container">
					<h2 className="text-white">Login</h2>
					<div className="card p-4">
						<form className="needs-validation" onSubmit={this.login}>
							<div className="form-group">
								<label htmlFor="labelEmail">Email</label>
								<input type="email" className="form-control" name="email" id="inputEmail" aria-describedby="Email input" value={this.state.email} onChange={this.handleChange} />
								{this.state.errors.email.length > 0 && <small className='form-text text-danger'>{this.state.errors.email}</small>}

							</div>
							<div className="form-group">
								<label htmlFor="labelPassword">Password</label>
								<input type="password" className="form-control" name="password" id="inputPassword" aria-describedby="Password input" value={this.state.password} onChange={this.handleChange} />
								{this.state.errors.password.length > 0 && <small className='form-text text-danger'>{this.state.errors.password}</small>}
							</div>
							<button type="submit" className="btn btn-primary btn-block">Login</button>
						</form>
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
		setLoggedIn,
		setUser
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);