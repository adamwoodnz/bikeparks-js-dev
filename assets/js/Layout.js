import React from 'react';
import Nav from './components/Nav'; // eslint-disable-line
import NavHelper from './components/NavHelper'; // eslint-disable-line

export default class Layout extends React.Component {
  render() {
    return (
      <NavHelper>
        <Nav />
        <div className="bp-content">{this.props.children}</div>
      </NavHelper>
    );
  }
}
