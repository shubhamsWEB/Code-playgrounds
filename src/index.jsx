/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';

ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);

if (!__DEVELOPMENT__ && !__SERVER__) {
  (function () {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }());
}
