import React, { Component } from 'react';
import Tile from './tile';

class TilesSet extends Component {

	render() {

		const tilesArr = [];

		for (let i = 1; i < 16; i ++) {
			tilesArr.push(
				<Tile content='content' />
			);
		}

		return(
			<div className='tiles_wrapper'>
				{ tilesArr }
			</div>
		);
	}
}

export default TilesSet;
