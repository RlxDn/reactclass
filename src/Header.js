import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <h1>WEB</h1>
        웹은 WWW (World Wide Web) 을 부르는 말 입니다.
        <br/>
        한글 : {this.props.korean}
        영어 : {this.props.english}
        </header>
      </div>
    )
  }
}

export default Header