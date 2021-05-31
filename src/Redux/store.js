import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleWare from 'redux-thunk'
import corsReducer from './CourseReducer';
let reducers = combineReducers({
    cors:corsReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
