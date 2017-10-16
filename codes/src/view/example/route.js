import GalleryView from './gallery/GalleryView';
import BasicAnimationView from './animation/BasicAnimationView';
import ExampleAnimationView from './animation/ExampleAnimationView';

export default [{
  path: '/example/gallery',
  component: GalleryView
}, {
  path: '/example/animation/basic',
  component: BasicAnimationView
}, {
  path: '/example/animation/example',
  component: ExampleAnimationView
}];
