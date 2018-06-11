import React, { Component } from 'react';

class TilesControls extends Component {
  render() {
    return (
      <div className='controls'>
        <div className='informer'>
					You did N tries
        </div>
        <div className='restarter'>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default TilesControls;
