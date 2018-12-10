import React, { Component } from 'react';
class PageYouGo extends Component {
  render() {
    return (
      <div className="flex">
        <div><div>
          You {this.props.real ? `ranked` : `didn't rank`} the first!
        </div></div>
        <div><div>
            {this.props.real ? 'Now, go ahead and answer the question! ' : `Plz listen carefully to ${this.props.who}`}
        </div></div>
        <div><div></div></div>
      </div>
    );
  }
}

export default PageYouGo;
