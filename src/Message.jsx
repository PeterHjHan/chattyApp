import React, {Component} from 'react';
import Messages from './MessageList.jsx';


class Message extends Component {

  constructor(props){
    super();
    this.state = {Messages}
  }

  render() {


    const getMessages = this.state.Messages.map(msg => (
      
      <div className="message">
        <span className="message-username">{msg.username}</span>
        <span className="message-content">{msg.content}</span>
      </div>

    ))
  

    return (
      <main className="messages">
        {getMessages}
      </main>
    )
  }
}

export default Message;
