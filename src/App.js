import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Article />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <h1>WEB</h1>
        웹은 WWW (World Wide Web) 을 부르는 말 입니다.
        </header>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="1.html">World</a></li>
            <li><a href="2.html">Wide</a></li>
            <li><a href="3.html">Web</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

class Article extends Component {
  render() {
    return (
      <div>
        <article>
          <h2>react</h2>
          react 는 무슨 뜻?
        </article>
      </div>
    )
  }
}


export default App;
