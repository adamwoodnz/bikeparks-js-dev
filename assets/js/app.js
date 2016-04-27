/* eslint no-console: 0 */
/**
 * Setup webpack public path
 * to enable lazy-including of
 * js chunks
 *
 */
import './vendor/webpack.publicPath';

import app from 'ampersand-app';
import Router from './Router';

window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start();
  }
});

app.init();
