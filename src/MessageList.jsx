import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {

  render() {

    const getMessages = this.props.messages.map(msg => (
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

export default MessageList;
