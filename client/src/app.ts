import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'GoChat';
    config.map([
      { route: ['', 'call'], name: 'call', moduleId: 'call', nav: true, title: 'call' },
      { route: ['devices'], name: 'devices', moduleId: 'devices', nav: true, title: 'devices' },
      { route: ['video-stream'], name: 'video-stream', moduleId: 'video-stream', nav: true, title: 'video-stream' }
    ]);

    this.router = router;
  }
}
