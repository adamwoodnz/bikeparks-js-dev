import React from 'react'; // eslint-disable-line
import ReactDom from 'react-dom';
import Router from 'ampersand-router';

import Layout from './Layout';  // eslint-disable-line
import Home from './views/Home';  // eslint-disable-line
import BikeHire from './views/BikeHire';  // eslint-disable-line

export default Router.extend({
  renderPage(page, options = { layout: true }) {
    const pageToRender = options.layout ? (
      <Layout>
        {page}
      </Layout>
    ) : null;

    ReactDom.render(pageToRender, document.querySelector('#bp-container'));
  },

  routes: {
    '': 'home',
    'bike-hire': 'bikeHire'
  },

  home() {
    this.renderPage(<Home />);
  },

  bikeHire() {
    this.renderPage(<BikeHire />);
  }
});
