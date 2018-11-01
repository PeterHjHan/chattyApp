import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: ""}, 
      messages : [],
      loading: true,
    }
    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket("ws://localhost:3001");
    this.recieveMessageFromServer = this.recieveMessageFromServer.bind(this);
    this.getUserCount = this.getUserCount.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.getUserCount();

    this.socket.onopen = (event) => {
      console.log('Connected to server')
    }
    this.recieveMessageFromServer();
    setTimeout(()=> {
      this.setState({loading:false})
    },500)
  }

  getUserCount() {
    this.socket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      const userCount = messageData.userCount;

    }
  }

  recieveMessageFromServer() {
    this.socket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      const userId = messageData.id;
      const username = messageData.username;
      const message = messageData.content;
      const type = messageData.type;
      var data = {
        id: userId,
        type: type,
        username: username,
        content : message
      }


      const messageFromServer = this.state.messages.concat(data)
      this.setState({messages: messageFromServer})
    }
  }

  addMessage(content) {

    var messageData = {
      type: content.type,
      user: content.username,
      oldUser: content.username,
      message: content.content,
    }
    switch (content.type) {
      case "incomingMessage" :
        messageData.type = "postChat"
        break;
      case "incomingNotification" :
        messageData.type = "postNotification"
    }
    this.socket.send(JSON.stringify(messageData))
  };
  

  render() {
    // this.recieveMessageFromServer()
    if(this.state.loading){
      return <h1 className="loading">Loading...</h1>
    }
    return (
      <div>
        <NavBar userCount = {this.getUserCount}/>
        <MessageList messages = {this.state.messages} />
        <ChatBar currentUser = {this.getUser} onNewChat ={this.addMessage} />
      </div>
    );
  }
  
}
export default App;