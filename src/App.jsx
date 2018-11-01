import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Mysterious", 
      messages : [],
      loading: true,
      userCount: 0,
    }
    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket("ws://localhost:3001");
    this.recieveMessageFromServer = this.recieveMessageFromServer.bind(this);
    this.setOldUserName = this.setOldUserName.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = (event) => {
      console.log('Connected to server')
    }

    this.recieveMessageFromServer();
    
    setTimeout(()=> {
      this.setState({loading:false})
    },500)
  }

  recieveMessageFromServer() {

    this.socket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      const userId = messageData.id;
      const username = messageData.username;
      const message = messageData.content;
      const type = messageData.type;
      const userCount = messageData.userCount

      var data = {
        id: userId,
        type: type,
        username: username,
        oldUserName: this.state.currentUser,
        content : message,
      }
      
      if(type === "userCount") {
        this.setState({userCount: userCount})      
      }

      const messageFromServer = this.state.messages.concat(data)
      this.setState({messages: messageFromServer})
    }
  }

  setOldUserName(content) {
    const previousUserName = content.username
    this.setState({currentUser: previousUserName})
  }

  addMessage(content) {
    var messageData = {
      type: content.type,
      user: content.username,
      message: content.content,
    }
    switch (content.type) {
      case "incomingMessage" :
        messageData.type = "postChat"
        break;
      case "incomingNotification" :
        messageData.type = "postNotification";
        messageData.message = `${this.state.currentUser} changed their name to ${messageData.user}`
    }
    this.socket.send(JSON.stringify(messageData))
  }

  render() {
    // this.recieveMessageFromServer()
    if(this.state.loading){
      return <h1 className="loading">Loading...</h1>
    }
    return (
      <div>
        <NavBar userCount = {this.state.userCount}/>
        <MessageList messages = {this.state.messages} showUpdateChat = {this.recieveMessageFromServer} 
        userName = {this.state.currentUser} />
        <ChatBar currentUser = {this.setOldUserName} onNewChat ={this.addMessage} />
      </div>
    );
  }
  
}
export default App;