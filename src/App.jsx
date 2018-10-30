import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';
import data from './messages.json';

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
      message: data,
      name: "Ujubuhjuh",
      loading: true,
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 9, username: "Michelle", content: "Hello there!"};
      const messages = this.state.message.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({message: messages})
    }, 3000);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.message} />
        <ChatBar name = {this.state.name}/>
      </div>
    );
  }
  
}
export default App;