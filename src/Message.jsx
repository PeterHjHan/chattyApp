import React, {Component} from 'react';

class Message extends Component {

  render() {
    const msg = this.props.messages;
    console.log(msg);
    
    return (
      <div className="message">
        <span className="message-username">{msg[0].username}</span>
        <span className="message-content">{msg[0].content}</span>
      </div>
    )
  }
}

export default Message;
