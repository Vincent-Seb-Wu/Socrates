import React, { Component } from 'react';

class DotDotDot extends Component {
  /*
  The '...' that animates. 
  We thought about adding fancy waiting animations, 
  but this app should not risk diverting students' attention. 
  So no fancy animation while the class is not using this app. 
  */
  NUM_DOTS = 3;
  state = {
    frame: 0, 
  };

  componentDidMount() {
    const timer = setInterval(this.acc.bind(this), 1000);
    this.setState({
        timer, 
    });
  }
  
  acc() {
    this.setState({
      frame: (this.state.frame + 1) % this.NUM_DOTS, 
    });
  }

  render() {
    return (<>
      <span> {'.'.repeat(this.state.frame + 1)} </span>
      <span style={{color: 'rgba(0,0,0,0)'}}> {'.'.repeat(this.NUM_DOTS - this.state.frame)} </span>
    </>);
  }
  
  componentWillUnmount() {
      clearInterval(this.state.timer);
  }
}

export default DotDotDot;
