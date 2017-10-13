import NotFoundView from './error/NotFoundView';
import HomeView from './home/HomeView';
import MailboxView from './mail/MailboxView';
import WelcomeView from './welcome/WelcomeView';

export default [{
  path: '/home',
  component: HomeView
}, {
  path: '/welcome',
  component: WelcomeView
}, {
  path: '/mail',
  component: MailboxView
}, {
  path: '/404',
  component: NotFoundView
}];
