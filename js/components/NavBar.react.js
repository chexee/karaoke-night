/**
 *
 * NavBar.react.js
 *
 * NavBar component
 */

import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="mt2 absolute bottom-0 col-12 bg-purple-2">
        <div className="clearfix">
          <div className="col col-4 py1 border-top border-purple-3">
            <div><div className="icon-disc icon-20 white"></div></div>
            <span className="h6 caps white bold">Songs</span>
          </div>
          <div className="col col-4 py1 muted border-top border-purple-3">
            <div><div className="icon-book icon-20 white"></div></div>
            <span className="h6 caps white bold">Songbooks</span>
          </div>
          <div className="col col-4 py1 muted border-top border-purple-3">
            <div><div className="icon-disc icon-20 white"></div></div>
            <span className="h6 caps white bold">Favorite</span>
          </div>
        </div>
      </div>
    );
  }
}
