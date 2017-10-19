import { Card, Radio } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { onAppLayoutChange, onAppLayoutInit } from './redux/actions';

const RadioGroup = Radio.Group;

class SettingView extends React.PureComponent {
  onChange = (e) => {
    this.props.onAppLayoutChange(e.target.value);
  };

  render() {
    const { setting } = this.props;
    console.log('SettingView', setting);
    return (
      <Card title="本应用的布局设置">
        <RadioGroup onChange={this.onChange} value={setting.layout}>
          <Radio value={'HCF'}>上中下布局</Radio>
          <Radio value={'SHCF'}>侧边栏-上中下布局</Radio>
        </RadioGroup>
      </Card>
    );
  }
}
function mapStateToProps(state) {
  return {
    setting: state.setting
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAppLayoutInit: bindActionCreators(onAppLayoutInit, dispatch),
    onAppLayoutChange: bindActionCreators(onAppLayoutChange, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingView));
