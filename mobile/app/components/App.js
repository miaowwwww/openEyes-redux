import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import GlobalNav from "./GlobalNav";
import Login from "./Login";


@observer
export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {login: true};
	}

	componentDidMount() {
		// setInterval(this.changeLogin, 2000);
	}



	render() {
		return (
			<div className="App">
				<div className="App-content">
					{ this.props.children }
				</div>
				<GlobalNav />
				<ReactCSSTransitionGroup
					transitionName="animateBottomUp"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200} >
					{ showLogin && <Login />}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}


