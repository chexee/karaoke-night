/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react'
import Header from './Header.react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    )
  }
}
