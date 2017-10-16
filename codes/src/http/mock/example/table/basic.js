/**
 * `/example/table/basic/list` 的 Mock 数据
 * @see https://github.com/nuysoft/Mock/wiki
 * @see http://mockjs.com/examples.html
 */
const Mock = require('mockjs');

const Random = Mock.Random;

const data = [];
for (let i = 0; i < 46; i += 1) {
  data.push({
    key: i,
    name: Random.cname(),
    age: Random.integer(18, 60),
    email: Random.email(),
    address: Random.county(true)
  });
}

module.exports = {
  code: 0,
  messages: '成功',
  data
};
