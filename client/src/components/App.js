import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import * as actions from '../actions';

class App extends React.Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" component={Landing} exact />
					<div className="container">
						<Route path="/surveys" component={Dashboard} exact />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</div>
			</BrowserRouter>
		);	
	}

}

export default connect(null, actions)(App);