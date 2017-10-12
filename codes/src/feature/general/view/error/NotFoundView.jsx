import React from 'react';
import { Link } from 'react-router-dom';
import img from './404.jpg';
import './NotFoundView.less';

export default class NotFoundView extends React.Component {
  state = {
    animated: ''
  };
  enter = () => {
    this.setState({ animated: 'hinge' });
  };

  render() {
    return (
      <div className="not-found">
        <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
        <p>您访问的页面不存在！ <Link to={'/'}>请回到首页</Link></p>
      </div>
    );
  }
}
