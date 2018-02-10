const sharp = require('sharp');
const imageType = require('image-type');

class Resizer {
  constructor(props) {
    this.props = props;
    this.width = props.width;
    this.run = this.run.bind(this);
  }

  async run(buffer) {
    const resizedBuffer = sharp(buffer)
      .resize(this.width)
      .toBuffer()
    return resizedBuffer;
  }
}

module.exports = Resizer;
