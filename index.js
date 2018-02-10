const Moonmen = require('./src/moonmen');
const Downloader = require('./src/downloader');
const Resizer = require('./src/resizer');
const express = require('express');

const app = express();
const moonmen = new Moonmen();


app.get('/:width', async (req, res) => {
  const data = await moonmen.optimize(
    new Downloader({
      url: 'https://blog.ilyalibin.com/content/images/2018/01/how-many-ghosts_coloring_page_png_468x609_q85.jpg'
    }),
    new Resizer({
      width: parseInt(req.params.width)
    })
  );
  res.contentType(data.type);
  res.end(data.buffer);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));