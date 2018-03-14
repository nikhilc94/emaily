import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends React.Component {
	
	renderFields() {
		return(
			<div>
				<Field 
					label="Survey Title" 
					type="text" 
					name="title" 
					component={SurveyField} 
				/>
				<Field 
					label="Subject Line" 
					type="text" 
					name="subject" 
					component={SurveyField} 
				/>
				<Field 
					label="Email Body" 
					type="text" 
					name="body" 
					component={SurveyField} 
				/>
				<Field 
					label="Recipient List" 
					type="text" 
					name="recipients" 
					component={SurveyField} 
				/>
			</div>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
					{this.renderFields()}
					<Link 
						to="/surveys" className="red btn-flat white-text"
					>
						<i className="material-icons right">cancel</i>
						Cancel
					</Link>
					<button 
						className="teal btn-flat right white-text"
						type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.title)
		errors.title = 'You must provide a title.';
	
	if(!values.subject)
		errors.subject = 'You must provide a subject.';
	
	if(!values.body)
		errors.body = 'You must provide a body.';
	
	errors.recipients = validateEmails(values.recipients || '');
	
	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',			//tells the form reducer to name this particular form as 'surveyForm'
	destroyOnUnmount: false
})(SurveyForm);