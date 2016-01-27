/**
 *
 * SongSearch.react.js
 *
 * Compnent for searching for songs
 */

import React, { Component } from 'react'

export default class SongSearch extends Component {
  render() {
    return (
      <form className="clearfix field-search relative js-song-search">
        <input id="search" type="text" placeholder="Search by title or artist" className="field bg-purple-2 white center  block col-12" />
      </form>
    )
  }
}
