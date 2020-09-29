import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

const app = <App items={window.__data__} />;

ReactDom.hydrate(app, document.getElementById('root'));
