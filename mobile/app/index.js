import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import './css/index.less';	

import  App  from './components/App';

import reducers from './reducers/index';

const loggerMiddlewart = createLogger();

const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddlewart
	)
);

const rootRoute = {
	childRoutes: [
			{
			path: '/',
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

ReactDOM.render(
	<Provider store={store} >
		<Router history={hashHistory} routes={rootRoute} />
	</Provider>,
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
