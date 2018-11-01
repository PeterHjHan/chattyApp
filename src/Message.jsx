import React, {Component} from 'react';

class Message extends Component {

  handleMessage() {
    switch(this.props.msg.type) {
      case 'postChat':
        return (<span className="message-content">{this.props.msg.content}</span>)
      case 'postNotification':
        return (<span className="message-content">has changed the Name to {this.props.msg.username}</span>)
    }
  }
  
  render() {
    return (
      <div className="message">
        <span className="message-username">{this.props.msg.username}</span>
        {this.handleMessage()}
      </div>
    )
  }
}

export default Message;
