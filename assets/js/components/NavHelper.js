import LocalLinks from 'local-links';
import React from 'react';

export default class NavHelper extends React.Component {
  onClick(e) {
    const pathname = LocalLinks.getLocalPathname(e);

    if (pathname) {
      e.preventDefault();
      app.router.history.navigate(pathname);
    }
  }

  render() {
    return (
      <div {...this.props} className="uk-container uk-container-center" onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
}
