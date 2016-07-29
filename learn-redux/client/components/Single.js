import React from 'react';

const Single = React.createClass({
	render() {
    const { post, i, comments } = this.props;
		return (
			<div className='single-photo'>
        <img src={post.display_src} alt={post.caption} className="single-photo" />
			</div>	
		)
	}
})

export default Single;