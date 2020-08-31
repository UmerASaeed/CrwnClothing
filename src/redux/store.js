import { createStore, applyMiddleware } from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'

import combineReducers from "./root-reducer"
import createSagaMiddleware from 'redux-saga'
import {fetchCollectionsStart} from "./shop/shop.sagas"


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV ==='development')
{
    middlewares.push(logger)
}

export const store = createStore(combineReducers, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);
