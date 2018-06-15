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
				<div data-content={ this.props.content } className='tile_content'>
					{ this.props.content }
				</div>
			</div>
		);
	}
}

export default Tile;
