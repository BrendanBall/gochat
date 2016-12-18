import {bindable} from 'aurelia-framework';

export class VideoStreamCustomElement {
 @bindable src = "";

  constructor() {
  }

  activate() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then((localMediaStream) => this.src = window.URL.createObjectURL(localMediaStream))
      .catch((e) => console.log(e));
  }
}
