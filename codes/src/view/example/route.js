import BasicAnimationView from './animation/BasicAnimationView';
import ExampleAnimationView from './animation/ExampleAnimationView';
import GalleryView from './gallery/Gallery';

export default [{
  path: '/example/image/gallery',
  component: GalleryView
}, {
  path: '/example/animation/basic',
  component: BasicAnimationView
}, {
  path: '/example/animation/example',
  component: ExampleAnimationView
}];
