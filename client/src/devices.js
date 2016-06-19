import "../node_modules/webrtc-adapter/out/adapter.js"

export class Devices {
  devices = [];

  activate() {
    navigator.mediaDevices.enumerateDevices().then((devices) => this.devices = devices);
  }
}
