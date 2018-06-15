import React, { Component } from 'react';
import Tile from './tile';

class TilesSet extends Component {
	constructor(props) {
		super(props);

		this.numberOpenedTilesInOneTry = 0;
		this.openedTile = '';
		this.tilesContArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		this.randContArr = [];
		this.counter = 0;
	}

	randomizeContent() {
		// const counter = 0;
		const randomNum = Math.floor(Math.random()*8);
		const usedElemLength =
			this.randContArr.filter(key => {return key === this.tilesContArr[randomNum]}).length;

		if (this.counter <= 16 && usedElemLength < 2) {
			this.randContArr.push(this.tilesContArr[randomNum]);
			this.counter++;
		}
		console.log('this.randContArr::', this.randContArr);
		// return this.randContArr;
	}

	renderTiles() {
		while (this.counter < 16) {
			this.randomizeContent();
		}
		const tilesArr = this.randContArr.map(key => {
			return (
				<Tile content={key} />
			);
		});
		return tilesArr;
	}

	handleClick(e) {
		//проверяем закрыта плитка (окно) или нет. если в имени класса нет 'open', то закрыта и
		//тогда добавляем класс open, который уже прописан в css (здесь еще нет) и который откроет плитку
		if (e.target.className === 'tile_content') {
			e.target.classList.add('open');
			this.numberOpenedTilesInOneTry++;
			console.log('openedTile:', e.target.dataset.content, this.numberOpenedTilesInOneTry);

			if (this.numberOpenedTilesInOneTry < 2) {
				//сохраняем открытую в первом ходе плитку, чтобы сравнить ее с открытой в следующем
				this.openedTile = e.target;

			} else if (this.openedTile.dataset.content === e.target.dataset.content) {
				console.log('GOOOD TRY!!!');
				this.numberOpenedTilesInOneTry = 0;
				this.openedTile = '';

			} else if (this.openedTile.dataset.content !== e.target.dataset.content) {
				console.log('BAD TRY!!!');
				this.numberOpenedTilesInOneTry = 0;
				//закрываем обе плитки
				this.openedTile.classList.remove('open');
				e.target.classList.remove('open');
				console.log('this.openedTile', this.openedTile);
				this.openedTile = '';
			}
			//дальше здесь (в теле этого блока if) вызываем редаксовский
			//dispatch(checkTile(e.target.data, this.numberOpenedTilesInOneTry)), где checkTile
			//(или как назовешь)- это экшин (в папке actions) в котором нужно прописать логику в которой
			//происходит обработка передаваемых ему данных:
		} else {
			console.log('Next Try');
			this.numberOpenedTilesInOneTry = 0;
		}
	}

	render() {

		return(
			<div className='tiles_wrapper' onClick={e => this.handleClick(e)}>
				{ this.renderTiles() }
			</div>
		);
	}
}

export default TilesSet;
