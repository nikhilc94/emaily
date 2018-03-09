

// State is:-
// 	null - Not sure user is logged in or logged out.
// 	false - User is logged out.
// 	User model - User is logged in.

const authReducer = (state = null, action) => {
	switch(action.type) {
		case 'FETCH_USER': 						//The payload from server returns an object if user is logged in
			return action.payload || false;     //and returns "" if user is logged out.
		default: 							   
			return state;
	}
}

export default authReducer;