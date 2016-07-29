import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';


import posts from './posts';
import comments from './comments';



//there are mainly three things that live in a state: 
  //posts, comments and changes in the URL


//name matters!! routing has to be called routing
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;