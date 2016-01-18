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
      <div className="mt2 px3">
        <form className="clearfix field-search relative">
          <input id="search" type="text" placeholder="Search by title or artist" className="field bg-purple-2 white center  block col-12" />
        </form>
      </div>
    );
  }
}