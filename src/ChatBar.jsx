import React, {Component} from 'react';
import { EventEmitter } from 'events';

function randomId() {
  return '_' + Math.
  random().toString(36).substr(2, 9);
};

class ChatBar extends Component{
  constructor(prop) {
    super(prop)
    this.state = {
      id: 3,
      username: "",
      content: "",
      error:""
    }
    this.getChatText = this.getChatText.bind(this);
    this.onChatSubmit = this.onChatSubmit.bind(this);
    this.getUserName = this.getUserName.bind(this); 
    this.onUserNameSubmit = this.onUserNameSubmit.bind(this);
  };


  //TODO: Bug where typing enter creates new same chat even though value shows nothing;
  //TODO: Error handling

  getUserName(event) {
    if(event.target.value.length === 0) {
      this.setState({username: "Mysterious"})
    } else {
      this.setState({username: event.target.value})
    }
  }

  onUserNameSubmit(event) {
    if(event.keyCode == 13){
      if(event.target.value.length === 0) {
        this.setState({username: "Mysterious"})
      } else {
        this.setState({username: event.target.value})
      }
    }
  }

  getChatText(event) {
    if(event.target.value.length === 0) {
      this.setState({
        error: "Please type in something"
      })
    } else {
      this.setState({
        id: this.props,
        username: this.state.username,
        content: event.target.value,
      });
    }
  }

  onChatSubmit(event) {
    if(event.keyCode == 13){
      this.props.onNewChat({
        id: randomId(), 
        username: this.state.username, 
        content: this.state.content})
      event.target.value = "";
    }
  }

  render() {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.state.username} onChange ={this.getUserName} onKeyUp = {this.onUserNameSubmit} name="username"/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.getChatText}
        onKeyUp ={this.onChatSubmit} name="chatContent"/>
      </footer>
    )
  }
}

export default ChatBar;

