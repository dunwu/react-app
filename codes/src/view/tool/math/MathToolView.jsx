import { Card, Input, Radio } from 'antd';
import React from 'react';
import { mathTool } from '../../../service';

const RadioGroup = Radio.Group;

const options = [
  { label: '二进制', value: 2 },
  { label: '八进制', value: 8 },
  { label: '十进制', value: 10 },
  { label: '十六进制', value: 16 },
  { label: '三十二进制', value: 32 }
];

class MathToolView extends React.PureComponent {
  state = {
    originNumber: 0, // 原数值
    originScale: 2, // 原进制
    transScale: 2, // 将转换的进制
    arabicNumber: 0, // 阿拉伯数字
    chineseNumber: '零' // 中文数字
  };

  onChangeArabicNumber = (e) => {
    this.setState({
      arabicNumber: e.target.value
    });
  };

  onChangeOriginScaleRadio = (e) => {
    this.setState({
      originScale: e.target.value
    });
  };

  onChangeTransScaleRadio = (e) => {
    this.setState({
      transScale: e.target.value
    });
  };

  onChangeOriginNumber = (e) => {
    this.setState({
      originNumber: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Card title="阿拉伯转换中文数字">
          <Input
            size="large"
            addonBefore="阿拉伯数字"
            style={{ minWidth: 250 }}
            value={this.state.arabicNumber}
            onChange={this.onChangeArabicNumber}
          />
          <br /><br />
          <span>中文数字：</span>
          <span>{mathTool.arabicToChinese(this.state.arabicNumber)}</span>
        </Card>
        <br /><br />
        <Card title="进制转换">
          <RadioGroup options={options} onChange={this.onChangeOriginScaleRadio} value={this.state.originScale} />
          <br /><br />
          <Input
            size="large"
            addonBefore="转换数字"
            style={{ minWidth: 250 }}
            value={this.state.originNumber}
            onChange={this.onChangeOriginNumber}
          />
          <br /><br />
          <RadioGroup options={options} onChange={this.onChangeTransScaleRadio} value={this.state.transScale} />
          <br /><br />
          <span>转换结果：</span>
          <span>
            {mathTool.transNumberScale(this.state.originNumber, this.state.originScale, this.state.transScale)}
          </span>
        </Card>
      </div>
    );
  }
}
export default MathToolView;
