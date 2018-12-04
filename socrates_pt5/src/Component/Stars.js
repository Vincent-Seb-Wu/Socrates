import React, { Component } from 'react';

class Stars extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 5,
        };
    }
    render() { 
        return (
            <div>
                {[0, 1, 2, 3, 4].map((index) => (
                    <OneStar key={index} index={index} score={this.state.score} onClick={this.onClick} />
                ))}
            </div>
        );
    }
    onClick = (index) => {
        this.setState({
            score: index + 1,
        });
    };
}

const OneStar = (props) => (
    <img src={`https://icongr.am/entypo/star${props.index < props.score ? '' : '-outlined'}.svg`} alt={props.index < props.score ? '*' : '_'} onClick={() => {props.onClick(props.index);}} />
)

export default Stars;
