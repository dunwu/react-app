import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoreContainer from './CoreContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CoreContainer />, document.getElementById('root'));
registerServiceWorker();
