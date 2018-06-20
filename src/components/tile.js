import React, { Component } from 'react';

const Tile = (props) => {
	return(
		<div className='tile'>
			<div data-content={ props.content } className='tile_content'>
				{ props.content }
			</div>
		</div>
	);
}
export default Tile;
