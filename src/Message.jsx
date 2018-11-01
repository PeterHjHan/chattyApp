import React, {Component} from 'react';

class Message extends Component {

  // notificationHandler() {
      
  // }

  // handleMessage() {
  //   switch(this.props.message.type) {
  //     case 'me':
  //       return (<span className="message-content italics">{this.props.message.content}</span>)
  //     case 'active':
  //       return (<span className="message-content active">has changed their active state</span>)
  //     case 'dog':
  //       return (<span className="message-content"><img src={this.props.message.content} alt="DOG!" /></span>)
  //     case 'gif':
  //       return (<span className="message-content"><strong>{this.props.message.content}</strong><br /><img src={this.props.message.url} alt="GIF!" /></span>)
  //     default:
  //       return (<span className="message-content">{this.props.message.content}</span>)
  //   }
  // }
  render() {
    


    return (
      <div className="message">

        <span className="message-username">{this.props.msg.username}</span>
       
        {this.props.msg.type === "incomingNotification" ? 
        (
          <div className="message system">{this.props.msg.content}</div>
        ) : (
          <span className="message-content">{this.props.msg.content}</span>
        )}

      </div>
    )
  }
}

export default Message;
