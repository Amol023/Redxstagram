// Reducers does the following;
// 1. takes in the action (info about what happened)
// 2. copy of the currrent state

//Redux needs only one reducer!!
  //But we create reducers for each state
    //and then have one big root reducer 
    //that contains all other reducers

//ALL the reducers runs everytime an action is dispatched


function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;