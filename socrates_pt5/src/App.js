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
    this.state = {
      page_num: 0, 
      username: '', 
      students: {}, 
      prof_said_go: false, 
    };
    fireState.on('value', (snapshot) => {
        this.setState(snapshot.val());
        if (this.state.page_num === 1 && this.state.prof_said_go) {
            this.nextPage();
        }
    });
  }

  render() {
    this.page = [
      <PageLogin loginDone={this.loginDone} />, 
      <PageWaitProf />, 
      <PageRate rateDone={this.rateDone} />, 
      <PageWaitOthers />, 
      <PageYouGo />, 
    ][this.state.page_num];
    return (
      <div className="App">
        {this.page}
      </div>
    );
  }

  nextPage() {
    this.setState({page_num: this.state.page_num + 1});
  }
  
  setStateUpload (delta) {
    this.setState(delta);
    fireState.update(delta);
  }
  
  resetDatabase () {
    fireState.set({
        ...this.state,
        page_num: 0, 
        username: '', 
    });
  }
  
  loginDone = (username) => {
      this.setState({
          username, 
      });
      this.setStateUpload({
          students: {
              username: {
                  damage_dealt: 0, 
                  ratinig: -1, 
              }, 
          }, 
      });
      this.nextPage();
  }
  
  rateDone = (score) => {
      this.setStateUpload({
          students: {
              [this.state.username]: {
                  rating: score, 
              }
          }
      });
      this.nextPage();
  }
}

export default App;
