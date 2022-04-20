import { createStore,combineReducers,applyMiddleware } from "redux"
import {restaurantListReducer} from './reducers/restaurantReducer'
import thunk from 'redux-thunk'


const reducers=combineReducers({
    restaurantReducer: restaurantListReducer
})

const middleware=[thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store