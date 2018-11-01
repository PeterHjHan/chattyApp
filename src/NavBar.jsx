import React, {Component} from 'react';

class NavBar extends Component{

  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="users-count">10 users online</p> 
      </nav> 
    )
  }
}

export default NavBar;

