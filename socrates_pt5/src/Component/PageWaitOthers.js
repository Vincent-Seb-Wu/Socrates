import React, { Component } from 'react';
import DotDotDot from './DotDotDot';

class PageWaitOthers extends Component {
  constructor(props) {
    super(props);
    setTimeout(this.props.nextPage, 3000);
  }
  render() {
    return (
      <div className="flex">
        <div><div>Thank you! </div></div>
        <div><div>Waiting for your classmates <DotDotDot /></div></div>
        <div><div></div></div>
      </div>
    );
  }
}

export default PageWaitOthers;
