import React, { Component } from 'react';

class Shoot extends Component {
  constructor() {
    super();

    this.state = {
      takes: []
    }
  }

  addTake = () => {
    const takes = [...this.state.takes];

    const ids = this.state.takes.map(take => take.id);

    const max_id = ids.length === 0 ? 0 : Math.max(...ids);

    takes.push({ id: max_id + 1 });

    this.setState({ takes })
  }

  render() {
    return (
      <React.Fragment>
        <h3> This is the Shoot component </h3>
        <button className="new-take-btn" onClick={this.addTake}>+</button>
      </React.Fragment>
    )
  }
}

export default Shoot;