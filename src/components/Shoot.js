import React, { Component } from 'react';
import Take from './Take';
import Button from '@material-ui/core/Button'

class Shoot extends Component {
  constructor() {
    super();

    this.state = {
      takes: []
    }
  }

  addTake = () => {
    const takes = [...this.state.takes];
    const ids = this.state.takes.map(take => take.props.id);
    const max_id = ids.length === 0 ? 0 : Math.max(...ids);
    
    takes.push(<Take key={max_id} id={max_id + 1} />);

    this.setState({ takes })
  }

  displayTakes = () => {
    
    return this.state.takes
  
  }

  render() {
    return (
      <React.Fragment>
        <h3> This is the Shoot component </h3>
        <Button variant="contained" color="primary" className="new-take-btn" onClick={this.addTake}>
          Add New Take
        </Button>

        <div className="takes">
          {this.displayTakes()}
        </div>
        
      </React.Fragment>
    )
  }
}

export default Shoot;