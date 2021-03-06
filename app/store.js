import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createHistory } from 'history'
import {createStore, applyMiddleware, compose} from 'redux'
import { reduxReactRouter } from 'redux-router';
import config from './config'
import routes from './routes'

export const createMyStore = function(rootReducer) {
	// syn the react router with redux store
    const reduxRouterEnhancer = reduxReactRouter({
    	routes,
    	createHistory,
    	routerStateSelector: state => state.get('route')
    })

	let middlewares = []
    // middleware for async dispatch actions
    middlewares.push(thunkMiddleware)
    // middlewares for debug
	if (config.debug) {
		// middleware that logs the global state for debug
		const loggerMiddleware = createLogger({
		    stateTransformer: (state) => {
		        return state.toJS()
		    }
		})
		middlewares.push(loggerMiddleware)
	}

	const createStoreWithMiddleware = compose(applyMiddleware(...middlewares), reduxRouterEnhancer)(createStore)
	const store = createStoreWithMiddleware(rootReducer)
	return store
}
