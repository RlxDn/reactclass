import './App.css';
import { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';

class App extends Component {
  render() {
    let css_style = {
      color: "red",
      fontWeight: "bold"
    };
    return (
      <div>
        <h1 style={css_style}>aaaa</h1>
        <Header korean="νκΈ" english="μμ΄"></Header>
        <Nav />
        <Article />
      </div>
    );
  }
}

export default App;