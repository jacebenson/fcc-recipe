import React, { Component } from 'react';
import Search from './Search.js';
import Controls from './Controls.js';

class Header extends Component {
  render() {
    return (
      <div className="container App-header">
        <div className="row">
          <div className="col-md-10">
            <Search />
          </div>
          <div className="col-md-2">
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
