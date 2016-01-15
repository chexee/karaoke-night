/**
 *
 * Header.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="bg-purple">
        { this.props.children }
        <a href="#">Log in</a>
      </div>
    );
  }
}
