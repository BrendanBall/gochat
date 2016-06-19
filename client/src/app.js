export class App {
  configureRouter(config, router) {
    config.title = 'GoChat';
    config.map([
      { route: ['', 'call'], name: 'call', moduleId: 'call', nav: true, title: 'call' },
      { route: ['devices'], name: 'devices', moduleId: 'devices', nav: true, title: 'devices' },
      { route: ['video-stream'], name: 'video-stream', moduleId: 'video-stream', nav: true, title: 'video-stream' }
    ]);

    this.router = router;
  }
}
