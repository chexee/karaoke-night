/**
 *
 * SongSearch.react.js
 *
 * Compnent for searching for songs
 */

import React, { Component } from 'react';

export default class SongSearch extends Component {
  render() {
    return (
      <form>
        <input id="search" type="text" placeholder="Search by title or artist" className="field bg-purple-1" />
      </form>
    );
  }
}
