/**
 *
 * NavBar.react.js
 *
 * NavBar component
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {
  componentDidMount() {
    const navTabs = document.getElementById('nav-tabs')
    for ( let i = 0; i < navTabs.children.length; i++ ) {
      if (navTabs.children[i].getAttribute('data-nav-tab') !== this.props.activeTab) {
        navTabs.children[i].className += ' muted'
      }
    }
  }
  render() {
    return (
      <div className="mt2 bottom-0 col-12 bg-purple-2 center fixed top-shadow">
        <div className="clearfix" id="nav-tabs">
          <Link data-nav-tab="songs" to="/songs" className="col col-4 py1 border-top border-3 border-purple-3">
            <div><div className="icon-disc icon-20 white"></div></div>
            <span className="h6 caps white bold">Songs</span>
          </Link>
          <Link data-nav-tab="songbooks" to="/songbooks" className="col col-4 py1 border-top border-3 border-purple-3">
            <div><div className="icon-book icon-20 white"></div></div>
            <span className="h6 caps white bold">Songbooks</span>
          </Link>
          <Link data-nav-tab="favorites" to="/favorites" className="col col-4 py1 border-top border-3 border-purple-3">
            <div><div className="icon-ribbon icon-20 white"></div></div>
            <span className="h6 caps white bold">Favorites</span>
          </Link>
        </div>
      </div>
    )
  }
}
