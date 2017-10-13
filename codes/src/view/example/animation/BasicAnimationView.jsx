import { Card, Col, Row, Switch } from 'antd';
import React from 'react';

/**
 * animate.css class
 * @see https://github.com/daneden/animate.css
 */
const animations = [
  'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake',
  'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
  'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
  'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
  'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
  'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
  'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
  'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
  'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
  'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
  'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
  'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
];

/**
 * 基础动画示例页面
 */
class BasicAnimationView extends React.Component {
  state = {
    animated: false,
    animatedOne: -1
  };
  animatedAll = (checked) => {
    this.setState({ animated: checked });
  };
  animatedOne = (i) => {
    this.setState({ animatedOne: i });
  };
  animatedOneOver = () => {
    this.setState({ animatedOne: -1 });
  };

  render() {
    const switchButton = (<Switch checkedChildren="全部启动" unCheckedChildren="全部关闭" onChange={this.animatedAll} />);
    return (
      <div className="gutter-example button-demo">
        <Card title="基础动画" extra={switchButton} noHovering>
          <Row gutter={14}>
            {animations.map((v, i) => (
              <Col md={6} key={v}>
                <Card
                  className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''}
                   ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${v}`}
                  onMouseEnter={() => this.animatedOne(i)}
                  onMouseLeave={() => this.animatedOneOver()}
                >
                  <div className="pa-m text-center">
                    <h3 style={{ textAlign: 'center' }}>{v}</h3>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    );
  }
}
export default BasicAnimationView;
