const imageType = require('image-type');

class Moonmen {
  constructor(props) {
    this.buffer = new Buffer([]);
  }

  async optimize() {
    const moonmen = Array.from(arguments);

    for (let moon of moonmen) {
      console.log(`started ${moon.constructor.name}`)
      try {
        this.buffer = await moon.run(this.buffer);
      } catch(e) {
        console.log("error: ", e)
      }
      console.log(`finished ${moon.constructor.name}`)
    }

    const type = imageType(this.buffer).mime
    return {
      buffer: this.buffer,
      type: type
    }
  }
}

module.exports = Moonmen;

