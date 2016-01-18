/**
 *
 * Header.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="bg-white center flex flex-center fixed top-0 left-0 right-0 z4">
          <div style={{width: '80px'}}></div>
          <h1 className="purple-3 extra-bold mx-auto mt1 mb1 inline-block" style={{letterSpacing: '-3px'}}>KN</h1>
          <a href="#" className="inline-block right purple-3 caps small bold h6 mr2 py2" style={{width: '80px'}}>
            Log in
          </a>
      </div>
    )
  }
}
