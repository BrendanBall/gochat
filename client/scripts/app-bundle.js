define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'GoChat';
            config.map([
                { route: ['', 'call'], name: 'call', moduleId: 'call', nav: true, title: 'call' },
                { route: ['devices'], name: 'devices', moduleId: 'devices', nav: true, title: 'devices' },
                { route: ['video-stream'], name: 'video-stream', moduleId: 'video-stream', nav: true, title: 'video-stream' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('call',["require", "exports"], function (require, exports) {
    "use strict";
    var Call = (function () {
        function Call() {
        }
        return Call;
    }());
    exports.Call = Call;
});

define('devices',["require", "exports"], function (require, exports) {
    "use strict";
    var Devices = (function () {
        function Devices() {
            this.devices = [];
        }
        Devices.prototype.activate = function () {
            var _this = this;
            navigator.mediaDevices.enumerateDevices().then(function (devices) { return _this.devices = devices; });
        };
        return Devices;
    }());
    exports.Devices = Devices;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment", "webrtc-adapter"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use.plugin('aurelia-materialize-bridge', function (b) { return b.useAll(); });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('video-stream',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var VideoStreamCustomElement = (function () {
        function VideoStreamCustomElement() {
            this.src = "";
        }
        VideoStreamCustomElement.prototype.activate = function () {
            var _this = this;
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then(function (localMediaStream) { return _this.src = window.URL.createObjectURL(localMediaStream); })
                .catch(function (e) { return console.log(e); });
        };
        return VideoStreamCustomElement;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VideoStreamCustomElement.prototype, "src", void 0);
    exports.VideoStreamCustomElement = VideoStreamCustomElement;
});



define("webrtc", [],function(){});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"nav-bar.html\"></require>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <nav-bar router.bind=\"router\"></nav-bar>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!call.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./video-stream\"></require>\n  <h1>hello</h1>\n  <video-stream></video-stream>\n</template>\n"; });
define('text!devices.html', ['module'], function(module) { module.exports = "<template>\n  <select>\n      <option repeat.for=\"device of devices\">${device.label}</option>\n  </select>\n</template>\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <md-navbar md-fixed=\"true\">\n    <a class=\"brand-logo\" href=\"#\">\n      <i class=\"fa fa-home\"></i>\n      <span>${router.title}</span>\n    </a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li md-waves repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n        <a href.bind=\"row.href\">${row.title}</a>\n      </li>\n    </ul>\n  </md-navbar>\n</template>"; });
define('text!video-stream.html', ['module'], function(module) { module.exports = "<template>\n  <h1>\n    ${test}\n  </h1>\n    <video autoplay src.bind=\"src\"></video>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map