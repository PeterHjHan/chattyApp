import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

// Tree structure is: 
// APP 
//   MessageBox
//     Message
//     Message
//     Message
//   ChatBar

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "BOB"}, 
      messages : [],
      loading: true,
    }

    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket("ws://localhost:3001");
    this.recieveMessageFromServer = this.recieveMessageFromServer.bind(this);
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
      var data = {
        id: userId,
        username: username,
        content : message
      }

      const messageFromServer = this.state.messages.concat(data)
      this.setState({messages: messageFromServer})
    }
  }

  addMessage(content) {
    const updatedMessages = this.state.messages.concat(content);
    const user = this.state.currentUser.name
    
    this.setState({messages: updatedMessages,
      user: content.username, }, () => {   
        var messageData = {
          user: this.state.messages[this.state.messages.length-1].username,
          message: this.state.messages[this.state.messages.length-1].content,
        }
        this.socket.send(JSON.stringify(messageData))
    });
  }


  
  render() {
    // this.recieveMessageFromServer()
    if(this.state.loading){
      return <h1 className="loading">Loading...</h1>
    }
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.messages} showUpdateChat = {this.recieveMessageFromServer} />
        <ChatBar currentUser = {this.getUser} onNewChat ={this.addMessage} />
      </div>
    );
  }
  
}
export default App;