import React, {Component} from 'react';

function randomId() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

class ChatBar extends Component{

  constructor(prop) {
    super(prop)
    this.state = {
      id: 3,
      username: "",
      content: "",
    }
    this.getChatText = this.getChatText.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  getChatText(event) {
    this.setState({
      id: randomId(),
      username: this.props.currentUser.name,
      content: event.target.value,
    });
  }

  onSubmit(event) {
    if(event.keyCode == 13){
      this.props.onNewChat(
        {id: randomId(), 
         username: this.state.username, 
         content: this.state.content})
      event.target.value = "";
    }
  }
  
  render() {

    return (

      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.getChatText}
        onKeyUp ={this.onSubmit}/>
      </footer>
    )
  }
}

export default ChatBar;

