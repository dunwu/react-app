import NotFoundView from './view/error/NotFoundView';
import HomeView from './view/home/HomeView';

export default [{
  path: '/',
  component: HomeView,
  exact: true
}, {
  path: '/404',
  component: NotFoundView
}];
