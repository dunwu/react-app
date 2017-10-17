import { Card } from 'antd';
import QRCode from 'qrcode.react';
import React from 'react';

/**
 * 二维码生成工具
 * @see https://github.com/zpao/qrcode.react
 */
class QRCodeToolView extends React.PureComponent {
  state = {
    value: 'https://dunwu.github.io/react-app/demos/',
    size: 128,
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'L'
  };

  update = () => {
    this.setState({
      value: this.refs.value.value || '',
      size: parseInt(this.refs.size.value, 10) || 0,
      bgColor: this.refs.bgColor.value,
      fgColor: this.refs.fgColor.value,
      level: this.refs.level.value
    });
  };

  render() {
    const code = `
      <QRCode
        value={"${this.state.value}"}
        size={${this.state.size}}
        bgColor={"${this.state.bgColor}"}
        fgColor={"${this.state.fgColor}"}
        level={"${this.state.level}"}
      />
    `;

    return (
      <Card title="生成二维码">
        <div>
          <label>
            Size(px):
            <br />
            <input
              ref="size"
              type="number"
              onChange={this.update}
              value={this.state.size}
            />
          </label>
        </div>
        <div>
          <label>
            Background Color:
            <br />
            <input
              ref="bgColor"
              type="color"
              onChange={this.update}
              value={this.state.bgColor}
            />
          </label>
        </div>
        <div>
          <label>
            Foreground Color:
            <br />
            <input
              ref="fgColor"
              type="color"
              onChange={this.update}
              value={this.state.fgColor}
            />
          </label>
        </div>
        <div>
          <label>
            Error Level:
            <br />
            <select ref="level" onChange={this.update} value={this.state.level}>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Value:
            <br />
            <textarea
              rows="6"
              cols="80"
              ref="value"
              onChange={this.update}
              value={this.state.value}
            />
          </label>
        </div>

        <div>
          <label>
            Use it:
            <br />
            <textarea rows="6" cols="80" disabled value={code} />
          </label>
        </div>

        <QRCode
          value={this.state.value}
          size={this.state.size}
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          level={this.state.level}
        />
      </Card>
    );
  }
}
export default QRCodeToolView;
