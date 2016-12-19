
export class Devices {
  devices: MediaDeviceInfo[] = [];
  selectedDevice: string = null;

  activate() {
    navigator.mediaDevices.enumerateDevices()
    .then(devices => devices.filter(device => device.label !== ""))
    .then(devices => this.devices = devices);
    console.log("activating devices");
  }
}
