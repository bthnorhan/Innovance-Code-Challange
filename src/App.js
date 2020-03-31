import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import NotFoundPage from './pages/NotFoundPage';
import UpcomingLaunchesPage from './pages/UpcomingLaunchesPage';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';

function App() {
	return (
		<Router basename='/Innovance-Code-Challange'>
			<Switch>
				<Route exact path="/" component={LoadingPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/logout" component={LogoutPage} />
				<Route exact path="/upcoming" component={UpcomingLaunchesPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default App;
