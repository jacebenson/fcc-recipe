import React, { Component } from 'react';

import './Controls.css';

class Controls extends Component {
  render() {
    return (
      <div className="control container">
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-success">Create</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
