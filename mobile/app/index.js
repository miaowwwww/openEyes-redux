import React from 'react';
import reactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './css/index.less';	


import  App  from './components/App';

const rootRoute = {
	path: "/",
	indexRoute: { onEnter: (nextState, replace) => replace('/app')},
	childRoutes: [
			{
			path: 'app',
			component: App,
			indexRoute: { onEnter: (nextState, replace) => replace('/my') },
			childRoutes: [
				require('./routes/PageFollow'),
				require('./routes/PageFound'),
				require('./routes/PageMy'),
				require('./routes/PageSelect')
			]
		},
		{
			path: '*',
			indexRoute: { onEnter: (nextState, replace) => replace('/my') }
		}
	]
}
reactDOM.render(
	<Router history={hashHistory} routes={rootRoute} />,
	document.getElementById('root')
)


// reactDOM.render((
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}>
// 				<IndexRedirect to="/my" />
// 				{/* <IndexRoute component={Home} /> */}
// 				<Route path="welcome" component={Welcome} />
// 				<Route path="about" component={About} />
// 				<Redirect from='*' to='/404' />
// 		</Route>
// 	</Router>
// ), document.getElementById('root'))
