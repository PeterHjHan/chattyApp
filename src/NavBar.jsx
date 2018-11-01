import React, {Component} from 'react';

class NavBar extends Component{

  render() {
    console.log("LKSJLKDJAS", this.props.userCount())
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="users-count">{this.props.userCount} users online</p> 
      </nav> 
    )
  }
}

export default NavBar;

