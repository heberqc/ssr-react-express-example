import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDom.hydrate(
  // <Provider store={store}>
    <BrowserRouter>
      <App items={window.__data__} />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
