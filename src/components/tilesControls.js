import React, { Component } from 'react';

class TilesControls extends Component {
  render() {

		console.log('TilesControls render', this.props);

    return (
      <div className='controls'>
        <div className='informer'>
					You did { this.props.triesCounter } tries.
        </div>
        <div className='restarter'>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default TilesControls;
