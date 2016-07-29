import React from 'react';
import Photo from './Photo';          


// Now we need to pass down actual photos -- line 11
//To do that we use ES6's 'spread' -- which passes all the props

//'key' is for REACT and 'i' is the index in REDUX
const PhotoGrid = React.createClass({
	render() {
		return (
			<div className='photo-grid'>
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
			</div>	
		)
	}
})

export default PhotoGrid;