import BasicAnimationView from './animation/BasicAnimationView';
import ExampleAnimationView from './animation/ExampleAnimationView';
import GalleryView from './gallery/Gallery';
import BasicTableView from './table/BasicTableView';

export default [{
  path: '/example/table/basic',
  component: BasicTableView
}, {
  path: '/example/image/gallery',
  component: GalleryView
}, {
  path: '/example/animation/basic',
  component: BasicAnimationView
}, {
  path: '/example/animation/example',
  component: ExampleAnimationView
}];
