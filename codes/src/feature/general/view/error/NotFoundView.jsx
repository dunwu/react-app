import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundView.less';

export default class NotFoundView extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>木找到！ <Link to={'/'}>回到首页</Link></p>
      </div>
    );
  }
}
