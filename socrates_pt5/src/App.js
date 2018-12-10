import React, { Component } from 'react';
import './App.css';
import PageLogin from './Component/PageLogin';
import PageWaitProf from './Component/PageWaitProf';
import PageRate from './Component/PageRate';
import PageWaitOthers from './Component/PageWaitOthers';
import PageYouGo from './Component/PageYouGo';

import firebase from 'firebase';
import { config } from './secret';
firebase.initializeApp(config);
const database = firebase.database();
const fireState = database.ref('state');

class App extends Component {
  constructor (props) {
    super(props);
    document.title = 'Socrates';
    this.state = {
      page_num: 0, 
      username: '', 
      students: {}, 
      prof_said_go: false, 
    };
    fireState.on('value', (snapshot) => {
        const state = snapshot.val();
        this.setState(state);
        if (this.state.page_num === 1 && state.prof_said_go) {
            this.nextPage();
            if (! state.students[this.state.username].selected) {
                this.nextPage();
            }
        }
        if (this.state.page_num === 3 && Object.values(state.students).every((student) => (! student.selected))) {
            this.nextPage();
        }
        if (this.state.page_num === 4 && ! state.prof_said_go) {
            this.setState({page_num: 1});
        }
    });
  }

  render() {
    this.page = [
      <PageLogin loginDone={this.loginDone} />, 
      <PageWaitProf />, 
      <PageRate rateDone={this.rateDone} />, 
      <PageWaitOthers />, 
      <PageYouGo real={this.getMax() === this.state.username} who={this.getMax()} />, 
    ][this.state.page_num];
    return (
      <div className="App">
        <div id="username">{this.state.username}</div>
        {this.page}
      </div>
    );
  }

  nextPage() {
    this.setState({page_num: this.state.page_num + 1});
  }
  
  setStateUpload = (delta) => {
    this.setState(delta, () => {
        fireState.set({
            students: this.state.students, 
            prof_said_go: this.state.prof_said_go, 
        });
    });
  }
  
  loginDone = (username) => {
      this.setState({
          username, 
      });
      this.setStateUpload({
          students: {
              ...this.state.students, 
              [username]: {
                  rating: '...', 
                  selected: false, 
              }, 
          }, 
      });
      this.nextPage();
  }
  
  rateDone = (score) => {
      this.setStateUpload({
          students: {
              ...this.state.students, 
              [this.state.username]: {
                  rating: score, 
                  selected: false, 
              }
          }
      });
      this.nextPage();
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
}

export default App;
