import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from "redux-thunk"
import { allMoviesReducer } from './redux/reducers';

//INITIAL STATE
const initialState = {
};

// REDUCER 
const reducer = combineReducers({
   allMovies: allMoviesReducer
})

//MIDDLEWARE
//enable Redux DevTools Extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE
const store = createStore(
     reducer,
     initialState,
     composeEnhancer(applyMiddleware(thunk)));
export default store;