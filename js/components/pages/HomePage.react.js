/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import SongSearch from '../SongSearch.react';
import micIllo from 'file?name=[name].[ext]!../../../img/mic-illustration.svg';

export default class HomePage extends Component {
  render() {
    return (
      <div className="center py3">
        <div style={{marginBottom: '-5px'}} className="h5">Every night is</div>
        <h1 className="mt0 extra-bold caps z2 relative" style={{letterSpacing: '-1px', marginBottom: '-20px'}}>
          Karaoke Night
        </h1>
        <img src={micIllo} className="mx-auto z1" />
        <SongSearch />
      </div>
    );
  }
}
