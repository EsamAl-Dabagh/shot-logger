import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class ShootTitle extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    }
  }

  keyPress = (e) => {
    if(e.keyCode === 13){
      this.setState({ text: e.target.value })
      this.props.passToShoot(e.target.value);
    }
  }

  inputPlaceholder = () => {
    if (this.state.text === "") {
      return "Enter Shoot Title"
    }

    return this.state.text;
  }

  displayTitle = () => {

    const titleInput = <form>
                          <TextField 
                            className="title-input" 
                            placeholder={this.inputPlaceholder()}
                            onKeyDown={this.keyPress}
                          />
                        </form>

    if (this.state.text === "") return titleInput;
    
    return <h1 className="shoot-title">{this.state.text}</h1>
    
  }

  render() {
    return(
      <React.Fragment>
        {this.displayTitle()}
      </React.Fragment>
    )
  }
}

export default ShootTitle;