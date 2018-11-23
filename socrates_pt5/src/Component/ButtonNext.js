import React, { Component } from 'react';

class ButtonNext extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <button onClick={this.props.onClick}>Next</button>
            </div>
        );
    }
}

export default ButtonNext;
