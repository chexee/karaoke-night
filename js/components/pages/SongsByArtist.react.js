/*
 * Songs by Artist
 */

import React, { Component } from 'react'

export default class SongsByArtist extends Component {

  renderArtistItems() {
    return Object.keys(this.props.artists).map( key => {
      return (
        <div className="border-bottom border-muted py2 mrn2 relative">
          <div className="white h4">{this.props.artists[key].name}</div>
          <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
            <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
            ›
          </span>
        </div>
      )
    })
  }

  render() {
    return (<div>{this.renderArtistItems()}</div>)
  }
}
