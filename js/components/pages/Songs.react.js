/*
 * Songs
 * Songs landing page
 */

import React, { Component } from 'react'
import NavBar from '../NavBar.react'
import SongSearch from '../SongSearch.react'


export default class Songbooks extends Component {
  render() {
    return (
      <div>

        <div className="fixed left-0 right-0 top-0 mt4 z1 py2 px2 bg-purple">
          <div className="mt1"><SongSearch /></div>
          <div className="py1 px0 mt1">
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
          <hr className="border-bottom border-muted mxn2 m0" />
        </div>

        <div className="p2 overflow-scroll mb4" style={{marginTop: '200px'}}>

          <div className="mt0">
            <div className="h6 caps bold">#</div>
            <div className="border-bottom border-muted py2 mrn2 relative">
              <div className="white h4">? and the Mysterians</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
                <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
                ›
              </span>
            </div>
            <div className="border-bottom border-muted py2 mrn2 relative">
              <div className="white h4">10,000 Maniacs</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
                <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
                ›
              </span>
            </div>
          </div>

          <div className="mt3">
            <div className="h6 caps bold">A</div>
            <div className="border-bottom border-muted py2 mrn2 relative">
              <div className="white h4">ABBA</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
                <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
                ›
              </span>
            </div>
            <div className="border-bottom border-muted py2 mrn2 relative">
              <div className="white h4">Paula Abdul</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
                <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
                ›
              </span>
            </div>
            <div className="border-bottom border-muted py2 mrn2 relative">
              <div className="white h4">AC/DC</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '10px'}}>
                <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>10 songs</span>
                ›
              </span>
            </div>

          </div>

        </div>

        <NavBar activeTab="songs"/>
      </div>
    )
  }
}
