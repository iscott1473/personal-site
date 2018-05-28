import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import SettingIcon from './partials/Settings.js'
import Header from './partials/Header.js'
import Footer from './partials/Footer.js'
import './styles/app.css'
import './scripts/parallax.js'

const warning = () => {
  alert("Warning, under construction")
}

const App = () => (
  <Router>
    <div className = 'primary-style'>
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Raleway" rel="stylesheet" />
      <SettingIcon />
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
      <script>
        {window.addEventListener('DOMContentLoaded', warning, false)}
      </script>
    </div>
  </Router>
)

export default hot(module)(App)
