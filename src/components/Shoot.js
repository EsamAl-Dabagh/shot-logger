import React, { Component } from 'react';
import Take from './Take';
import ShootTitle from './Shoot-Title';
import Button from '@material-ui/core/Button';

class Shoot extends Component {
  constructor() {
    super();

    this.state = {
      takes: [],
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

  confirmTake = () => {
    this.addTake();
  }

  removeTake = id => {
    const takes = this.state.takes.filter(take => take.props.id !== id);
    this.setState({ takes });
  }

  displayTakes = () => {
    return this.state.takes
  }

  displayExportButton = () => {

    const button = <Button variant="outlined" color="primary" className="export-pdf-btn">
                    Export as PDF
                  </Button>

    if (this.state.takes.length > 0) return button; 
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
        
        {this.displayExportButton()}
        
      </React.Fragment>
    )
  }
}

export default Shoot;