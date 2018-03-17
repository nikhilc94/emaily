import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
	return (
		<div>
			<p>Congratulations! You get 5 free credits upon signing up. Start sending mass surveys now!</p>
			<SurveyList />
  			<div className="fixed-action-btn">
    			<Link to="/surveys/new" className="btn-floating btn-large red">
      				<i className="material-icons">add</i>
      			</Link>
			</div>
		</div>
	);
}

export default Dashboard;