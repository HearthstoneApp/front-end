/* eslint-disable */
import { AppContainer } from 'react-hot-loader';
/* eslint-enable */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

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
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
