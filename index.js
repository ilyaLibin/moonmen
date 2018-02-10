const Moonmen = require('./src/moonmen');
const Downloader = require('./src/downloader');
const Resizer = require('./src/resizer');
const express = require('express');

const app = express();
const moonmen = new Moonmen();

const ORIGIN = 'https://blog.ilyalibin.com';

app.get('/:hash_uid/:width/*', async (req, res) => {
  debugger
  const width = parseInt(req.params.width);

  const data = await moonmen.optimize(
    new Downloader({
      url: `${ORIGIN}/content/images/2018/01/how-many-ghosts_coloring_page_png_468x609_q85.jpg`
    }),
    new Resizer({
      width
    })
  );
  res.contentType(data.type);
  res.end(data.buffer);
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));