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
      currentUser: {name: "Bob"}, 
      messages : [],
      loading: true,
    }

    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket("ws://localhost:3001");
    this.recieveMessageFromServe = this.recieveMessageFromServe.bind(this);
  }


  recieveMessageFromServe() {
    this.socket.onmessage = function(event) {
      console.log(event.data);

      const messageData = JSON.parse(event.data);
      const userId = messageData.id;
      const username = messageData.username;
      const message = messageData.message;
  
      var data = {
        id: userId,
        username: username,
        message : message
      }
      console.log("FROMSERVER", data)
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = (event) => {
      console.log('Connected to server')
    }
    
    setTimeout(()=> {
      this.setState({loading:false})
    },500)
  }
  
  addMessage(content) {
    const updatedMessages = this.state.messages.concat(content);

    this.setState({messages: updatedMessages}, () => {       
      var data = {
        user: this.state.currentUser.name,
        message: this.state.messages[this.state.messages.length-1].content,
      }
      this.socket.send(JSON.stringify(data));
    })

    
    
  }
  
  render() {
    this.recieveMessageFromServe();
    if(this.state.loading){
      return <h1 className="loading">Loading...</h1>
    }
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.messages} />
        <ChatBar currentUser = {this.state.currentUser} onNewChat ={this.addMessage}/>
      </div>
    );
  }
  
}
export default App;