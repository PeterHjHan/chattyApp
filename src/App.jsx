import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';
import Messages from './messages.json';

// Tree structure is: 
// APP 
//   MessageBox
//     Message
//     Message
//     Message
//   ChatBar

//Fragment can replace div check version though

//Highest Node, must contain the main state)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: Messages
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Message messages = {this.state.message} />
        <ChatBar />
      </div>
    );
  }
  
}
export default App;