import express from 'express';
import path from 'path';
import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom/server';

import App from '../client/components/App';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/ssr', async (req, res) => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos');
    const items = response.data.map(item => ({id: item.id, label: item.title}));
    const root = (
        <html>
            <body>
                <div id="root">
                    <App items={items} />
                </div>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__data__ = ${JSON.stringify(items)};`
                    }}
                />
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});
