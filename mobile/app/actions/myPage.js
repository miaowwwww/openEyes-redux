export const addOption = (option) => ({
	type: 'add_option',
	option
})
export const toggleLoginView = () => ({
	type: 'toggleLoginView',
	// showLogin
})

export const beginLogin = () => {
	return {
		type: 'beginLogin'
	}
}
export const finishLogin = (data) => {
	return {
		type: 'finishLogin',
		username: data
	}
}
export const login = (user) => (dispatch, state) => {
	dispatch(beginLogin());
	asyncLogin()
	.then((resolveData) => {
		dispatch(finishLogin(resolveData));
	})
}


const asyncLogin = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('jody');
		},2000);
	});
}