import React, { Component } from 'react';

class Shoot extends Component {
  constructor() {
    super();

    this.state = {
      takes: []
    }
  }


  render() {
    return (
      <React.Fragment>
        <h3> This is the Shoot component </h3>
        <button className="new-take-btn">+</button>
      </React.Fragment>
    )
  }
}

export default Shoot;