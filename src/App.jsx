import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
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
  render() {
    return (
      <div>
        <NavBar/>
        <Message messages = {this.state.message} />
        <ChatBar name = {this.state.name}/>
      </div>
    );
  }
  
}
export default App;