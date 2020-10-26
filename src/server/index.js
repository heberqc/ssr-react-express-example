import express from 'express';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/components/App';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/*', async (req, res) => {
  const context = {};
  const response = await axios('https://jsonplaceholder.typicode.com/todos');
  const items = response.data.map(item => ({id: item.id, label: item.title})).slice(0,10);
  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App items={items} />
    </StaticRouter>
  );
  const indexFile = path.resolve('./dist/server/template.html');
  fs.readFile(indexFile, 'utf8', (err, indexData) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    if (context.status === 404) {
        res.status(404);
    }

    if (context.url) {
        return res.redirect(301, context.url);
    }

    return res.send(
      indexData
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace('</body>',`<script>window.__DATA__ = ${serialize(items)}</script></body>`)
    );
  });
});

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});
