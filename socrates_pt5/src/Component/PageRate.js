import React, { Component } from 'react';
import Stars from './Stars';
import ButtonNext from './ButtonNext';

class PageRate extends Component {
  constructor (props) {
      super(props);
      this.state = {
          score: 5, 
      };
  }
  
  render() {
    return (
      <div className="flex">
        <div className="double-font"><div>You have been picked! </div></div>
        <div><div>Rate your willingness to answer the question: </div></div>
        <div><Stars score={this.state.score} update={this.updateScore}/></div>
        <div><ButtonNext onClick={this.submitScore}/></div>
      </div>
    );
  }
  
  updateScore = (new_score) => {
      this.setState({
          score: new_score, 
      });
  }
  
  submitScore = () => {
      this.props.rateDone(this.state.score);
  }
}

export default PageRate;
