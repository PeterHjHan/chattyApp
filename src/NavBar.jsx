import React, {Component} from 'react';

class NavBar extends Component{

  render() {
    const getUser = this.props.userCount;
    return (
      <nav className="navbar">
      {this.getUser}
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="users-count">{getUser} users online</p> 
      </nav> 
    )
  }
}

export default NavBar;

