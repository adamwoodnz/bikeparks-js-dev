import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <ul id="bp-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/park-info">Park Info</a></li>
        <li><a href="/bike-hire">Bike Hire</a></li>
      </ul>
    );
  }
}
