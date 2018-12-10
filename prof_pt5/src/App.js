import React, { Component } from 'react';
import RandomB from './Component/RandomB';
import Display from './Component/Display';
import './App.css';

import firebase from 'firebase';
import { config } from './secret';
firebase.initializeApp(config);
const database = firebase.database();
const fireState = database.ref('state');

class App extends Component {
  constructor (props) {
    super(props);
    document.title = 'Socrates: Prof End';
    this.state = {
      students: {}, 
      prof_said_go: false, 
      stage: 0, 
    };
    this.resetDatabase();
  }
  
  componentDidMount = () => {
    fireState.on('value', (snapshot) => {
        const state = snapshot.val();
        this.setState(state);
        if (this.state.stage === 1 && Object.values(state.students).every((student) => (! student.selected))) {
            this.setState({stage: 2});
        }
    });
  };
  
  render() {
    return (
      <div className="App">
        <div className="air-hat">
            {[
                ['Welcome to Socrates!', <br />, 'Click the button to pick 2 students:'], 
                'Waiting for students to rate their willingness...', 
                this.getMax() + ' will answer the question!', 
            ][this.state.stage]}
        </div>
        <div>
            {[
                <RandomB onClick={this.handleClicked.bind(this)} />, 
                <></>, 
                <button onClick={this.finish}>
                    Finish
                </button>, 
            ][this.state.stage]}
        </div>
        <Display students={this.state.students} />
      </div>
    );
  }

  handleClicked(which_method_to_use) {
    const selected = which_method_to_use(Object.keys(this.state.students));
    this.setStateUpload({
        students: {
            ...this.state.students, 
            [selected[0]]: {
                ...this.state.students[selected[0]], 
                selected: true, 
            }, 
            [selected[1]]: {
                ...this.state.students[selected[1]], 
                selected: true, 
            }, 
        }, 
        prof_said_go: true, 
    });
    this.setState({
        stage: 1, 
    });
  }

  setStateUpload = (delta) => {
    this.setState(delta, () => {
        fireState.set({
            students: this.state.students, 
            prof_said_go: this.state.prof_said_go, 
        });
    });
  }
  
  resetDatabase () {
    fireState.set(this.state);
  }
  
  getMax = () => {
    let name;
    let max_rating = 0;
    Object.entries(this.state.students).map((student) => {
        if (student[1].rating > max_rating) {
            name = student[0];
            max_rating = student[1].rating;
        }
        return null;
    });
    return name;
  };
  
  finish = () => {
      const newStudents = {}
      Object.entries(this.state.students).map((entry) => {
          const student = {...entry[1], rating: '...'};
          const name = entry[0];
          newStudents[name] = student;
          return null;
      });
      this.setStateUpload({
          prof_said_go: false, 
          students: newStudents, 
      });
      this.setState({stage: 0});
  };
}

export default App;
