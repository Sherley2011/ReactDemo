import {SharePhotoContainer} from '../containers/SharePhotoContainer'


import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'

const routes = <ReduxRouter>
	<Route path="/" component={SharePhotoContainer}>
		<IndexRoute></IndexRoute>

	</Route>
</ReduxRouter>

export default routes
