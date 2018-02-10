const sharp = require('sharp');
const imageDownload = require('image-download');
const imageType = require('image-type');

class Downloader {
  constructor(props) {
    this.props = props;
    this.url = props.url;
    this.run = this.run.bind(this);
  }

  async run() {
    const buffer = await imageDownload(this.url);

    return buffer
  }
}

module.exports = Downloader;
