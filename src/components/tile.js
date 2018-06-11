import React, { Component } from 'react';

class Tile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isClosed: true
		};
	}

	render() {
		return(
			<div className='tile'>
				{ this.props.content }
			</div>
		);
	}
}

export default Tile;
