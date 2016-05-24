import "../node_modules/webrtc-adapter/out/adapter.js"

export class Call {
  src = "";
  devices = [];

  activate() {
    navigator.mediaDevices.enumerateDevices().then((devices) => this.devices = devices);
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then((localMediaStream) => this.src = window.URL.createObjectURL(localMediaStream))
      .catch((e) => console.log(e));
  }
}


