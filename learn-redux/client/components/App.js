//This is the file that 'sprinkles' some added stuff on Main.js
    //It attaches action creators 
    //And actual data
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//we want to import ALL the exported actions from the file
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// so instead of creating a new React component, we connect all the other ones
// with the respective data and actions
//***********MAGICAL FUNCTION*************//
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
//***********MAGICAL FUNCTION*************//

//the two arguments basically connect REACT AND REDUX
// Adds everything to the Main component
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;