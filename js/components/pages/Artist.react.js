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
    this.setArtistData()
  }
  componentDidMount() {
    this.setSongData()
  }

  setArtistData() {
    // Init Firebase data
    const getArtistData = new Firebase('https://karaokenight.firebaseio.com/artists/' + this.props.params.artistId)
    getArtistData.on('value', (snapshot) => this.setState({ artistData: snapshot.val() }) )
  }

  setSongData() {
    if (!this.state.artistData) { return }
    const getSongs = new Firebase('https://karaokenight.firebaseio.com/songs/')
    this.state.artistData.songs.map( songID => {
      getSongs.orderByKey().equalTo(songID).on('value', (snapshot) => {
        const songObj = snapshot.val()
        this.state.songs.push(songObj[Object.keys(songObj)].title)
      })
    })
  }


  renderSongItems() {
    return this.state.songs.map( song => {
      return (
        <div className="border-bottom border-muted py2 mrn2 relative" key={song}>
          <div className="white h4" style={{marginRight: '130px'}}>{song}</div>
          <span className="white absolute right-0 h2 mr3 px1" style={{top: '10px'}}>
            <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 events</span>
            ›
          </span>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="p2 overflow-scroll mt4 mb4">
          <div className="h6 caps white">Songbooks</div>
          {this.renderSongItems()}
        </div>
        <NavBar activeTab="songs" />
      </div>
    )
  }
}
