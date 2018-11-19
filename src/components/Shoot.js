import React, { Component } from 'react';
import Take from './Take';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

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

  keyPress = (e) => {
    if(e.keyCode === 13){
      this.setState({ title: e.target.value })
    }
  }

  displayTitle = () => {

    const titleInput = <form>
                          <TextField 
                            className="title-input" 
                            placeholder="Enter Shoot Title"
                            onKeyDown={this.keyPress}
                          />
                        </form>

    if (this.state.title === "") return titleInput;
    
    return <h1 className="shoot-title">{this.state.title}</h1>
    
  }

  render() {
    return (
      <React.Fragment>
        {this.displayTitle()}
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