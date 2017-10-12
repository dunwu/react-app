/**
 * @file 面包屑组件
 * @author Zhang Peng
 * @see https://github.com/facebook/prop-types
 * @see https://ant.design/components/breadcrumb-cn/
 * @see https://ant.design/components/icon-cn/
 */
import { Breadcrumb, Icon } from 'antd';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Navpath.less';

const getPathItems = (list, key, result) => {
  list.forEach((item) => {
    if (_.toString(item.key) === _.toString(key)) {
      result.push(item);
    } else if (_.isArray(item.children)) {
      getPathItems(item.children, key, result);
    }
  });
};

/**
 * 面包屑组件
 * @class
 */
class Navpath extends React.PureComponent {
  render() {
    const { menu } = this.props;

    // 根据选中菜单项的关键 key 数组获取对应组件
    const items = [];
    if (menu.selected && menu.list) {
      if (_.isArray(menu.selected.keyPath)) {
        menu.selected.keyPath.reverse().forEach((key) => {
          getPathItems(menu.list, key, items);
        });
      }
    }

    const breadcrumbItems = items.map((item) => {
      return (
        <Breadcrumb.Item key={`bc-${item.key}`}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Breadcrumb.Item>
      );
    });

    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}
export default withRouter(connect(mapStateToProps)(Navpath));
