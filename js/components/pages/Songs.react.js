/*
 * Songs
 * Songs landing page
 */

import React, { Component } from 'react'
import NavBar from '../NavBar.react'
import SongSearch from '../SongSearch.react'
import SongsByArtist from './SongsByArtist.react'
import Firebase from 'firebase'

export default class Songs extends Component {
  constructor(props) {
    super(props)
    this.state = {karaokeData: null}
  }
  componentWillMount() {
    // Init Firebase data
    const karaokeData = new Firebase('https://karaokenight.firebaseio.com/')
    karaokeData.on('value', (snapshot) => this.setState({ karaokeData: snapshot.val() }))
  }

  render() {
    if (!this.state.karaokeData) { return <div></div> }
    return (
      <div>
        <div className="fixed left-0 right-0 top-0 z1 px2 bg-purple" style={{marginTop: '55px'}}>
          <div className="mt1 py1"><SongSearch /></div>
          <div className="px0 mt1">
            <div className="h6 white caps">Browse by</div>
            <div className="flex py1">
              <a href="#" className="flex-auto">
                <span className="icon-tag mr1"></span>
                Artist
              </a>
              <a href="#" className="flex-auto center">
                <span className="icon-head mr1"></span>
                Genre
              </a>
              <a href="#" className="flex-auto right-align">
                <span className="icon-book mr1"></span>
                Songbooks
              </a>
            </div>
          </div>
          <hr className="border-bottom border-muted mxn2 mb0" />
        </div>
        <div className="p2 overflow-scroll" style={{marginBottom: '60px', marginTop: '175px'}}>
          <SongsByArtist artists={this.state.karaokeData.artists} />
        </div>
        <NavBar activeTab="songs"/>
      </div>
    )
  }
}
