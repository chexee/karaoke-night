/*
 * Songs by Artist
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import Infinite from 'react-infinite'

export default class SongsByArtist extends Component {
  renderArtistItems() {
    return Object.keys(this.props.artists).map( key => {
      return (
        <Link to={'/songs/' + key} key={key}>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4" style={{marginRight: '140px'}}>{this.props.artists[key].label}</div>
            <span className="white absolute right-0 h2 mr3 px1" style={{top: '10px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>{this.props.artists[key].songs.length + ' songs'}</span>
              ›
            </span>
          </div>
        </Link>
      )
    })
  }

  render() {
    return (
      <div style={{marginRight: '-15px'}}>
        <Infinite containerHeight={430} elementHeight={56} infiniteLoadBeginEdgeOffset={200} preloadBatchSize={Infinite.containerHeightScaleFactor(2)}>{this.renderArtistItems()}</Infinite>
      </div>
    )
  }
}
