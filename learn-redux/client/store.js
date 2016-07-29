import  { createStore, compose} from 'redux';
//hook up react router with redux
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//import dummy data
import comments from './data/comments';
import posts from './data/posts';


//create an object for the default data
const defaultState = {
  //same as posts: posts
  posts,
  //same as comments: comments
  comments
}; 

const store = createStore(rootReducer, defaultState)


export const history = syncHistoryWithStore(browserHistory, store);

export default store;