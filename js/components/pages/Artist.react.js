/*
 * Artist view
 */

import React, { Component } from 'react'
import Firebase from 'firebase'
import NavBar from '../NavBar.react'


export default class Artist extends Component {

  constructor(props) {
    super(props)
    this.state = {songs: []}
  }

  componentWillMount() {
    this.getArtist()
  }
  componentDidMount() {
    this.getSongsByArtist()
  }

  getArtist() {
    // Init Firebase data
    const artist = new Firebase('https://karaokenight.firebaseio.com/artists/' + this.props.params.artistId)
    artist.on('value', (snapshot) => this.setState({ artist: snapshot.val() }) )
  }

  getSongsByArtist() {
    if (!this.state.artist) { return }
    const getSongs = new Firebase('https://karaokenight.firebaseio.com/songs/')
    const songTitles = []
    this.state.artist.songs.map( songID => {
      getSongs.orderByKey().equalTo(songID).on('value', (snapshot) => {
        const song = snapshot.val()
        songTitles.push(song[Object.keys(song)].title)
      })
    })
    this.setState({ songs: songTitles })
  }

  renderSongItems() {
    if (this.state.songs) {
      return this.state.songs.map( song => {
        return (
          <div className="border-bottom border-muted py2 mrn2 relative" key={song}>
            <div className="white h4" style={{marginRight: '130px'}}>{song}</div>
            <span className="white absolute right-0 h2 mr3 px1" style={{top: '10px'}}>
              ›
            </span>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <div className="p2 overflow-scroll mt4 mb4">
          <div className="h6 caps white">Songs by {this.state.artist.label}</div>
          {this.renderSongItems()}
        </div>
        <NavBar activeTab="songs" />
      </div>
    )
  }
}
