
export class Devices {
  devices: MediaDeviceInfo[] = [];

  activate() {
    navigator.mediaDevices.enumerateDevices().then((devices) => this.devices = devices);
  }
}
