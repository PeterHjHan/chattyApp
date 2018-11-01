import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
    
  render() {
    const getMessages = this.props.messages.map(msg => (
        <Message key={msg.id} msg={msg} userName={msg.oldUserName}/>
    ))

    return (
      <main className="messages">
        {getMessages}
      </main>
    )
  }
}

export default MessageList;
