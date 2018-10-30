import React, {Component} from 'react';

class Message extends Component {

  render() {
    const message = this.props.messages;
    //use deconstructor to shorten stuff

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

export default Message;
