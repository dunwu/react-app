import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './favicon.ico';
import './Logo.less';

class Logo extends React.PureComponent {
  render() {
    return (
      <div>
        <Link className="logo" to="/home">
          <img alt="antd.svg" src={logoImg} />
          <span>REACT APP</span>
        </Link>
      </div>
    );
  }
}
export default Logo;
