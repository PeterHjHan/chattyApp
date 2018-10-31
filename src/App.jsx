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
      "currentUser": {"name": "Bob"}, 
      "messages": [
        {
          "id": 1,
          "username": "Bob",
          "content": "Has anyone seen my marbles?"
        },
        {
          "id": 2,
          "username": "Anonymous",
          "content": "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ],
      loading: true,
    }

    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket("ws://localhost:3001");
  }

  

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = (event) => {
      console.log('Connected to server')
    }
    
    setTimeout(()=> {
      this.setState({loading:false})
    },500)
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      
      this.setState({messages: messages})
    }, 1000);
  }
  
  addMessage(content) {
    const updatedMessages = this.state.messages.concat(content);
    this.setState({ messages : updatedMessages })
  }
  
  render() {

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