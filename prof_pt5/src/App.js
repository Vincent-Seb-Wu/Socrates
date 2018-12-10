import React, { Component } from 'react';
import RandomB from './Component/RandomB';
import Students from './Component/Students';
import Display from './Component/Display';
import './App.css';

class App extends Component {

  state = {
    displaying: null,
    Students: Students,
  };

  render() {
    return (
      <div className="App">
        <div className="pick">
          Pick a Student:
        </div>
        <Display student={this.state.displaying} />
        <div className="but">
          <RandomB onClick={this.handleClicked.bind(this)} />
        </div>
        

      </div>
    );
  }

  handleClicked(which_method_to_use) {
    const selected = which_method_to_use(this.state.Students);
    this.setState({ displaying: selected });
  }

}

export default App;
