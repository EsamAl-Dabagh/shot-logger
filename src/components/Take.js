import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

class Take extends Component {
  constructor() {
    super();

    this.state = {
      scene: "",
      shot: "",
      takeNumber: "",
      description: "",
      goodTake: false,
      notes: ""
    }
  }

  render() {
    return (
      <div className="take">
        <p>This is the TAKE component: {this.props.id}</p>
        <form>
          <TextField 
            className="scene-input" 
            variant="outlined" 
            label="Scene"
            autoFocus
            onChange={event => this.setState({ scene: event.target.value })} 
          />
          <TextField 
            className="shot-input"
            variant="outlined"
            label="Shot"
            onChange={event => this.setState({ shot: event.target.value })} 
          />
          <TextField 
            className="take-input"
            variant="outlined" 
            label="Take"
            onChange={event => this.setState({ takeNumber: event.target.value })} 
          />
          <TextField 
            className="desc-input"
            variant="outlined" 
            label="Description"
            onChange={event => this.setState({ description: event.target.value })} 
          />
              
          <Checkbox
            className="goodTake-switch"
            checked={this.state.goodTake}
            onChange={event => this.setState({ goodTake: event.target.checked })} 
            value="goodTake"
            color="primary"
            label="Good Take?"
          />
          
          <TextField
            className="notes-input"
            variant="outlined"
            label="Notes"
            multiline
            onChange={event => this.setState({ notes: event.target.value })}
          />
        </form>

        <Button 
          variant="contained" 
          color="secondary" 
          className="remove-btn"
          onClick={() => this.props.removeTake(this.props.id)}
        >
          <DeleteIcon className="delete-icon" />
        </Button>

        <Button 
          variant="contained" 
          color="primary" 
          className="confirm-btn"
          onClick={() => this.props.confirmTake(this.props.id, this.state)}
        >
          <DoneIcon className="confirm-icon" />
        </Button>
      </div>
      
    )
  }
}

export default Take;