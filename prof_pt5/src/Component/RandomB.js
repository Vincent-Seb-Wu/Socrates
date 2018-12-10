import React, { Component } from 'react';
import RandomS from './RandomS';
import '../App.css';
class RandomB extends Component {
    render() { 
        return (
            <button onClick={function (event) {
                this.props.onClick(RandomS.fair);
            }.bind(this)}>
                Random
            </button>
        );
    }
}
 
export default RandomB;