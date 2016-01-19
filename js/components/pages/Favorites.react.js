/*
 * Favorites
 * Favorites landing page
 */

import React, { Component } from 'react'
import NavBar from '../NavBar.react'


export default class Favorites extends Component {
  render() {
    return (
      <div>
        <div className="p2 overflow-scroll mt4 mb4">
          <div className="center mb3">
            <button className="btn bg-purple-3 white regular py1 px3">Import from Spotify</button>
          </div>

          <div className="h6 caps white">Your favorites</div>

          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Let's Dance</div>
            <div className="white muted h6 semibold">David Bowie</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
              </span>

          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Lazarus</div>
            <div className="white muted h6 semibold">David Bowie</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
            </span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Let's Dance</div>
            <div className="white muted h6 semibold">David Bowie</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
              </span>

          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Lazarus</div>
            <div className="white muted h6 semibold">David Bowie</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
            </span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Let's Dance</div>
            <div className="white muted h6 semibold">David Bowie</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
              </span>

          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Lazarus</div>
            <div className="white muted h6 semibold">David Bowie</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
            </span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Let's Dance</div>
            <div className="white muted h6 semibold">David Bowie</div>
              <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
              </span>

          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Lazarus</div>
            <div className="white muted h6 semibold">David Bowie</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '23px'}}>
              <span className="inline-block h6 bg-teal rounded mr2 relative" style={{padding: '3px 12px', top: '-3px'}}>5 events</span>
              ›
            </span>
          </div>
        </div>
        <NavBar activeTab="favorites"/>
      </div>
    )
  }
}
