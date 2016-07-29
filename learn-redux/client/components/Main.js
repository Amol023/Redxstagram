import React from 'react';
import { Link } from 'react-router';


// {/*Has to link either Single or PhotoGrid*/}
// 				{/*actual switching done by react router*/}
// 				{/*{this.props.children}*/} -- {could be populated by react-router}
// 				{/*but we can't pass props this way, which is why we pass it 
// 						as an argument to React.cloneElement*/}


//here the React.cloneElement makes sure that all the actions and the 
//data is passed down to the child -- which in this case is photo grid component
const Main = React.createClass({
	render() {
		return (
			<div>
				<Link to='/'>Reduxstagram</Link>
				{React.cloneElement(this.props.children, this.props)}
			</div>	
		)
	}
})

export default Main;