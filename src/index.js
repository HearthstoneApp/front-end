/* eslint-disable */
import { AppContainer } from 'react-hot-loader';
/* eslint-enable */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/app').default;
    render(NextApp);
  });
}
