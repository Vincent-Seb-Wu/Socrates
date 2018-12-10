import React, { Component } from 'react';

class Display extends Component {
    render () { 
        if (this.props.student == null) {
            return (
                <p>Choose Your Fighter</p>
            );
        
        }
        return (
            <div>
                <p>{this.props.student.name}</p>
                
            </div>
        );
    }
}

export default Display;