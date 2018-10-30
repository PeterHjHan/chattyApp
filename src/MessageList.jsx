import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {

  render() {

    const getMessages = this.props.messages.map(msg => (
      <div className="message">
        return (
          <Message />
        )
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
