import MathToolView from './math/Math';
import QRCodeToolView from './qrcode/QRCode';
import RichEditorView from './editor/RichEditor';

export default [{
  path: '/tool/math',
  component: MathToolView
}, {
  path: '/tool/qrcode',
  component: QRCodeToolView
}, {
  path: '/tool/richeditor',
  component: RichEditorView
}];
