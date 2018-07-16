import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {color: props.value}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
      >
      </div>
    )
  }

}
