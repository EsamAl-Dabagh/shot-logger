import React, { Component } from 'react';

class Take extends Component {
  render() {
    return (
      <div className="take">
        <p>This is the TAKE component: {this.props.id}</p>
        <form>
          <input className="scene-input"></input>
          <input className="shot-input"></input>
          <input className="take-input"></input>
          <input className="desc-input"></input>
          <input className="goodTake-input"></input>
        </form>
      </div>
      
    )
  }
}

export default Take;