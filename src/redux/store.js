import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'

import combineReducers from "./root-reducer"

const middlewares = [ReduxThunk];

if (process.env.NODE_ENV ==='development')
{
    middlewares.push(logger)
}

export const store = createStore(combineReducers, applyMiddleware(...middlewares))

export const persistor = persistStore(store);
