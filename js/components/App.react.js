/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.children }
        klsdfjas;
      </div>
    );
  }
}
