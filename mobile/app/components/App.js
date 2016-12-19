import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import GlobalNav from "./GlobalNav";
import Login from "./Login";
import { toggleLoginView, login }  from '../actions';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { showLogin, toggleLoginView, login, isLogining } = this.props;
		console.log('reload App')
		return (
			<div className="App">
					<ReactCSSTransitionGroup
						transitionName="animateBottomUp"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={200} >
				<div className="App-content">
					{ this.props.children }
				</div>
				<GlobalNav />

				{showLogin &&
						<Login closeView={toggleLoginView} login={login} isLogining={isLogining} />
				}
					</ReactCSSTransitionGroup>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		showLogin: state.commont.showLogin,
		isLogining: state.commont.logining
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleLoginView: () => {dispatch(toggleLoginView())},
	login: (user) => { dispatch(login(user)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

