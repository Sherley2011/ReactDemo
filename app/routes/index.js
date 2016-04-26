import {WebappContainer} from '../containers/webapp/WebappContainer'


import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'

const routes = <ReduxRouter>
	<Route path="/" component={WebappContainer}>
		<IndexRoute></IndexRoute>
		<Route path="webapp" component={WebappContainer}></Route>
	</Route>
</ReduxRouter>

export default routes
