import React, { Component } from 'react';
import Stars from './Stars';
import ButtonNext from './ButtonNext';

class PageRate extends Component {
  render() {
    return (
      <div className="flex">
        <div className="double-font"><div>You have been picked! </div></div>
        <div><div>Rate your willingness to answer the question: </div></div>
        <Stars />
        <ButtonNext onClick={this.props.nextPage}/>
      </div>
    );
  }
}

export default PageRate;
