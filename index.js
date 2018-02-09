const Moonmen = require('./src/moonmen');
const Downloader = require('./src/downloader');

const moonmen = new Moonmen();

moonmen.optimize(
  new Downloader({
    url: 'https://www.w3schools.com/w3css/img_fjords.jpg'
  }),
  // new Compressor({

  // }),
  // new Resizer({

  // }),
  // new Sender({
    
  // })
)