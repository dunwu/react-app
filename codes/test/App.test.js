import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/feature/specific/view/welcome/WelcomeView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
