import _ from 'lodash';

const fraction = ['角', '分'];
const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
/**
 * 将阿拉伯数字金额转换为中文数字金额
 * @param value
 * @returns {*}
 */
const arabicToChinese = (value) => {
  if (_.isNaN(_.toNumber(value))) {
    return _.toNumber(value);
  }

  const head = value < 0 ? '欠' : '';
  value = Math.abs(value);

  let s = '';

  for (let i = 0; i < fraction.length; i += 1) {
    s += (digit[Math.floor(value * 10 * (10 ** i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  value = Math.floor(value);

  for (let i = 0; i < unit[0].length && value > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && value > 0; j += 1) {
      p = digit[value % 10] + unit[1][j] + p;
      value = Math.floor(value / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
};

/**
 * 进制转换
 * @param value 原数值
 * @param originScale 原进制
 * @param transScale 将要转换的机制
 * @returns {*}
 */
const transNumberScale = (value, originScale, transScale) => {
  const temp = parseInt(value, originScale);
  return temp.toString(transScale);
};

export default {
  arabicToChinese,
  transNumberScale
};

