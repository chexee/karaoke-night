/**
 *
 * Header.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  goBack() { window.history.back() }
  render() {
    return (
      <div className="bg-white center flex flex-center fixed top-0 left-0 right-0 z4">
        <button onClick={this.goBack} className="btn right purple-3 caps small bold h6 mr1 py1 px0" style={{width: '90px'}}>
          <span className="icon-arrow-left mr1 inline-block"></span>
          Back
        </button>
        <Link to="/" className="mx-auto">
          <h4 className="purple-3 extra-bold mt1 mb1 inline-block caps" style={{letterSpacing: '-1px'}}>KaraokeNight</h4>
        </Link>
        <div style={{width: '90px'}}></div>
      </div>
    )
  }
}
