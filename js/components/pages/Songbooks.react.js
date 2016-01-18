/*
 * Songbooks
 * Songbooks landing page
 */

import React, { Component } from 'react'
import NavBar from '../NavBar.react'

export default class Songbooks extends Component {
  render() {
    return (
      <div>
        <div className="p2 overflow-scroll mt4 mb4">
          <div className="h6 caps white">Songbooks</div>

          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">DJ Purple</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">KJ Paul</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Roger Niner</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 1,456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">DJ Purple</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">KJ Paul</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Roger Niner</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 1,456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">DJ Purple</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">KJ Paul</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>
          <div className="border-bottom border-muted py2 mrn2 relative">
            <div className="white h4 mb1">Roger Niner</div>
            <div className="white muted h6 semibold">Tuesdays and Thursdays&nbsp; &middot;&nbsp; 1,456 songs</div>
            <span className="white absolute right-0 h2 mr3" style={{top: '20px'}}>›</span>
          </div>

        </div>
        <NavBar activeTab="songbooks"/>
      </div>
    )
  }
}
