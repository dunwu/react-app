import MailboxView from './view/mail/MailboxView';
import WelcomeView from './view/welcome/WelcomeView';

export default [{
  path: '/mail',
  component: MailboxView
}, {
  path: '/welcome',
  component: WelcomeView
}];
