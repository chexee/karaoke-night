/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */

// Load the ServiceWorker, the Cache polyfill, the manifest.json file and the .htaccess file
import 'file?name=[name].[ext]!../.htaccess'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import FontFaceObserver from 'fontfaceobserver'
import createHistory from 'history/lib/createBrowserHistory'

// Observer loading of Open Sans (to remove open sans, remove the <link> tag in the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {})

// When Open Sans is loaded, add the js-open-sans-loaded class to the body
openSansObserver.check().then(() => {
  document.body.classList.add('js-open-sans-loaded')
}, () => {
  document.body.classList.remove('js-open-sans-loaded')
})

// Import the pages
import App from './components/App.react'
import Home from './components/pages/Home.react'
import Songbooks from './components/pages/Songbooks.react'
import Songs from './components/pages/Songs.react'

// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import 'basscss'
import '../css/main.css'

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
  <Router history={createHistory()}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/songbooks" component={Songbooks} />
      <Route path="/songs" component={Songs} />

    </Route>
  </Router>,
  document.getElementById('app')
)
