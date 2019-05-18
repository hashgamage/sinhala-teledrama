import React from 'react'
import thunk from 'redux-thunk'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import logger from 'redux-logger'
import Reducers from './rootReducer'
import { createStore } from 'redux';

const middleware =[thunk]
if(__DEV__){
    middleware.push(logger)
}

export const store = createStore(
    Reducers,
    applyMiddleware(...middlewares)
)

export const persistor = persistReducer(store)