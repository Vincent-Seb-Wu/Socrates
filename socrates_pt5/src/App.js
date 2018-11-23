import React, { Component } from 'react';
import './App.css';
import PageWaitProf from './Component/PageWaitProf';
import PageRate from './Component/PageRate';
import PageWaitOthers from './Component/PageWaitOthers';
import PageYouGo from './Component/PageYouGo';

class App extends Component {
  state = {
    page_num: 0, 
  };

  render() {
    this.page = [
      PageWaitProf, 
      PageRate, 
      PageWaitOthers, 
      PageYouGo, 
    ][this.state.page_num];
    return (
      <div className="App">
        <this.page nextPage={this.nextPage.bind(this)}/>
      </div>
    );
  }

  nextPage() {
    this.setState({page_num: this.state.page_num + 1});
  }
}

export default App;
