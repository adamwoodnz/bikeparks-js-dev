/* eslint no-console: 0 */
/**
 * Setup webpack public path
 * to enable lazy-including of
 * js chunks
 *
 */
import './vendor/webpack.publicPath';

import React from 'react'; // eslint-disable-line
import ReactDom from 'react-dom';
import Nav from './scripts/Nav'; // eslint-disable-line

ReactDom.render(<Nav />, document.querySelector('#bp-container'));
