export class App {
  configureRouter(config, router) {
    config.title = 'GoChat';
    config.map([
      { route: ['', 'call'], name: 'call', moduleId: 'call', nav: true, title: 'call' }
    ]);

    this.router = router;
  }
}
