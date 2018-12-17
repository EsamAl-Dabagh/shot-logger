import React, { Component } from 'react';
import Take from './Take';
import ShootTitle from './Shoot-Title';
import Button from '@material-ui/core/Button';

class Shoot extends Component {
  constructor() {
    super();

    this.state = {
      takes: [],
      takeDetails: [],
      title: ""
    }
  }
  
  addTake = () => {
    const takes = [...this.state.takes];
    const ids = this.state.takes.map(take => take.props.id);
    const max_id = ids.length === 0 ? 0 : Math.max(...ids);
    
    takes.push(<Take key={max_id + 1} id={max_id + 1} removeTake={this.removeTake} confirmTake={this.confirmTake} />);

    this.setState({ takes })
  }

  confirmTake = (takeID, take) => {

    const takeDetails = [...this.state.takeDetails]

    const currentTake = {
      "takeId": takeID,
      "scene": take.scene,
      "shot": take.shot,
      "takeNumber": take.takeNumber,
      "description": take.description,
      "goodTake": take.goodTake,
      "notes": take.notes
    }

    takeDetails.push(currentTake)

    this.setState({ takeDetails })
    this.addTake();
  }

  removeTake = id => {
    const takes = this.state.takes.filter(take => take.props.id !== id);
    this.setState({ takes });
  }

  displayTakes = () => {
    return this.state.takes
  }

  render() {
    return (
      <React.Fragment>
        <ShootTitle />
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