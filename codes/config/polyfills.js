if (typeof Promise === 'undefined') {
  // Rejection 跟踪防止了由于错误导致 React 进入不一致状态的常见问题，
  // 但是它被 Promise 吞没，用户不知道 React 的未来行为是不稳定的原因。
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() 用于进行API调用的 polyfill。
require('whatwg-fetch');

// Object.assign() 常用于 React。
// 如果它存在，将使用本地实现，但不是buggy。
Object.assign = require('object-assign');
