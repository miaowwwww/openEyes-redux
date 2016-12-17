import React from 'react';
import { Link } from 'react-router';

class GlobalNav extends React.Component {
	render() {
		return (
				<ul className="GlobalNav">
					<li><Link to="/select" activeClassName="GlobalNav-active">精选</Link></li>
					<li><Link to="/found" activeClassName="GlobalNav-active">发现</Link></li>
					<li><Link to="/follow" activeClassName="GlobalNav-active">关注</Link></li>
					<li><Link to="/my" activeClassName="GlobalNav-active">我的</Link></li>
				</ul>
		)
	}
}

module.exports = GlobalNav;