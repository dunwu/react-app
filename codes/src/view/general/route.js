import NotFoundView from './error/NotFoundView';
import SettingView from './setting/Setting';
import WelcomeView from './welcome/WelcomeView';

export default [{
  path: '/home',
  component: WelcomeView
}, {
  path: '/welcome',
  component: WelcomeView
}, {
  path: '/404',
  component: NotFoundView
}, {
  path: '/setting',
  component: SettingView
}];
