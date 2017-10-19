import React from 'react';
import logo from './logo.svg';
import './WelcomeView.less';

class WelcomeView extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App</h1>
        </header>
        <p className="App-intro">
          React App 正在构建中。。。
        </p>
      </div>
    );
  }
}
export default WelcomeView;
