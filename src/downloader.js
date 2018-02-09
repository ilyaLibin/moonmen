const Jimp = require('jimp');
const sharp = require('sharp');

class Downloader {
  constructor(props) {
    this.url = props.url;

    this.run = this.run.bind(this);
  }

  async run() {
    var image = await Jimp.read(this.url);
    image = sharp(image.bitmap.data)
    .resize(100)
    .toFile('output.webp')
    debugger
    debugger
    // return image.bitmap.data;
  }
}

module.exports = Downloader;
