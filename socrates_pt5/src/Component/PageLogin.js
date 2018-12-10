import React, { Component } from 'react';
import ButtonNext from './ButtonNext';

class PageLogin extends Component {
  constructor (props) {
      super(props);
      this.state = {
          username: '', 
      };
  }
  render() {
    return (
      <div className="flex">
        <div className="double-font"><div>Login </div></div>
        <div><div>
            <div>Your name: </div>
            <input type='text' onChange={this.inputOnChange} onKeyUp={this.onInputKeyPress} />
        </div></div>
        <div><ButtonNext onClick={this.submitUsername}/></div>
      </div>
    );
  }
  
  inputOnChange = (event) => {
      this.setState({username: event.target.value});
  }
  
  submitUsername = () => {
      this.props.loginDone(this.state.username);
  }
  
  onInputKeyPress = (event) => {
      if (event.keyCode === 13) {
          this.submitUsername();
      }
  }
}

export default PageLogin;
