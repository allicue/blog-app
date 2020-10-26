import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
