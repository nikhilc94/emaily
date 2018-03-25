

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
	const invalidEmails = emails
		.split(',')
		.map(email => email.trim())
		.filter(email => !re.test(email))  //the arrow function captures the emails that fail the test.

	if(invalidEmails.length)
		return `These email(s) are invalid: ${invalidEmails}.              
				Recipient list must be a comma separated list of emails.`
	return;
};