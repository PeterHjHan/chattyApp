import React, {Component} from 'react';

class ChatBar extends Component{

  constructor(prop) {
    super(prop)
    this.state = {
      id: 3,
      currentUser: "",
      message: "",
    }
    this.getChatText = this.getChatText.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  getChatText(event) {
    this.setState({
      id: 4,
      message: event.target.value,
      currentUser: this.props.currentUser.name
    });
  }

  onSubmit(event) {
    if(event.keyCode == 13){
      this.props.onNewChat(this.state.message)
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

