import React, {Component} from 'react';

class ChatBar extends Component{

  constructor(prop) {
    super(prop)
    this.state = {
      chatContent: ""
    }
    this.getChatText = this.getChatText.bind(this);
  }

  getChatText(event) {
    event.preventDefault();
    this.setState( 
      {
      chatContent: event.target.innerText,
    })
  }
  
  render() {

    return (
      <footer className="chatbar">
       <input className="chatbar-username" placeholder={this.props.currentUser.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onSubmit={this.getChatText}/>
      </footer>
    )
  }
}

export default ChatBar;

