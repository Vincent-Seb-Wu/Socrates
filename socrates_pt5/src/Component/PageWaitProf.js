import React, { Component } from 'react';
import DotDotDot from './DotDotDot';

class PageWaitProf extends Component {
  constructor(props) {
    super(props);
    setTimeout(this.props.nextPage, 5000);
  }

  render() {
    return (
      <div className="vertical-center">
        Waiting for the next activity
        <DotDotDot />
      </div>
    );
  }
}

export default PageWaitProf;
