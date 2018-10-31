import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';
import data from './messages.json';
import sampleData from './sampleData.json'

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

    this.onNewChat = this.onNewChat.bind(this);
  }



  componentDidMount() {
    console.log("componentDidMount <App />");

    setTimeout(()=> {
      this.setState({loading:false})
    },1000)
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)

      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 1500);
  }

  onNewChat(content) {
    const newMessage = content;
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages: messages })
  }

  render() {
    
    if(this.state.loading){
      return <h1>Loading</h1>
    }
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.messages} />
        <ChatBar currentUser = {this.state.currentUser} onNewChat ={this.onNewChat}/>
      </div>
    );
  }
  
}
export default App;