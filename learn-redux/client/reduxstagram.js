// let's go!
import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

//binds react and redux
import { Provider } from 'react-redux';

// store was exported with default while history wasnn't 
//hence, it goes inside curls
import store, { history } from './store';

//Line 17,19 means that if there's only "/" -- loads Main
	//BUT line 20 and 21 act like if-else statement
	//Wherein, if path is "/" -- route to PhotoGrid
	//ELSE IF path="/view/:postId" -- route to Single
	// Thus, IndexRoute and Route are main Route's children


	//Provider -- 'exposes' store to the DOM
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>

	)
render(router, document.getElementById('root'));

