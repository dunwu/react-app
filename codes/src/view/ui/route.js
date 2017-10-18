import AlertView from './Alert';
import ButtonView from './Button';
import IconView from './Icon';
import ModalView from './Modal';

export default [{
  path: '/ui/general/button',
  component: ButtonView
}, {
  path: '/ui/general/icon',
  component: IconView
}, {
  path: '/ui/feedback/alert',
  component: AlertView
}, {
  path: '/ui/feedback/modal',
  component: ModalView
}];
