import express from 'express';
import { join } from 'path';
const app = express();
const port = 8080;

/**
 * Serve static files with express
 * 
 * 
 * This example allows you to serve static files from the 'files' directory.
 * There are two get requests implemented
 * 
 * The first one is `/vorlesungsplan` that returns the pdf inside the `files` folder.
 * 
 * The second one is `/download/:name` where the `name` is the fileName
 * 
 * Postman examples: 
 * http://localhost:8080/download/TestPicture.png
 * http://localhost:8080/vorlesungsplan
 * 
 * You can also paste both urls into the browser and see the result.
 * 
 * **USAGE**
 * 
 * run `npm install` inside this folder
 * use `node file-serving.js` to start this express server
 */

app.get('/vorlesungsplan', (req, res) => {
  const fileName = 'Veranstaltungsplan_WI_2020a-4.pdf';
  res.sendFile(fileName, getOptions(), (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', fileName);
    }
  });
})

app.get('/download/:name', (req, res) => {
    const fileName = req.params.name;
    res.sendFile(fileName, getOptions(), (err) => {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      } else {
        console.log('Sent:', fileName);
      }
    });
});

app.listen(port, () => {
    console.log('Running...');
});

function getOptions() {
  const options = {
    root: join(__dirname, 'files'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  return options;
}