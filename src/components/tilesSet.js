import React, { Component } from 'react';
import Tile from './tile';

class TilesSet extends Component {
	constructor(props) {
		super(props);

		this.tilesContArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		this.randContArr = [];
		this.counter = 0;
	}

	randomizeContent() {
		const randomNum = Math.floor(Math.random()*8);
		const usedElemLength =
			this.randContArr.filter(key => {return key === this.tilesContArr[randomNum]}).length;
		if (this.counter <= 16 && usedElemLength < 2) {
			this.randContArr.push(this.tilesContArr[randomNum]);
			this.counter++;
		}
		console.log('this.usedElements.length', this.randContArr);
	}

	render() {

		while (this.counter < 16) {
			this.randomizeContent();
		}

		const tilesArr = this.randContArr.map(key => {
			return (
				<div className='tile'>
					<Tile content={key} />
				</div>
			);
		});

		return(
			<div className='tiles_wrapper'>
				{ tilesArr }
			</div>
		);
	}
}

export default TilesSet;
