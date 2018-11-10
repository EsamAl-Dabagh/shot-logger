import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Take extends Component {
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
          />
          <TextField 
            className="shot-input"
            variant="outlined"
            label="Shot"
          />
          <TextField 
            className="take-input"
            variant="outlined" 
            label="Take"
          />
          <TextField 
            className="desc-input"
            variant="outlined" 
            label="Description"
          />
          <TextField 
            className="goodTake-input"
            variant="outlined" 
            label="Good Take?"
          />
        </form>
      </div>
      
    )
  }
}

export default Take;