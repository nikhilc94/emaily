import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const Landing = ({ auth }) => {
	return (
		<div className="landing">
			<div className="container">
				<div className="landing-content">
					<h1>EMAILY!</h1>
					<h4>Collecting data that counts!</h4>
					<h4>Quickly gather actionable insights using e-mail surveys and polls.</h4>
					{
						auth ? 
						<NavLink to="/surveys" className="waves-effect waves-light btn-large">
							Go to Dashboard
			  			</NavLink> :
			  			''
					}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);