import React, { Component } from 'react'
import {Link, Outlet} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        Welcome to Product Page
        <nav>
          <Link to = "/products">Product</Link> {''} | {""}
          <Link to = "/contact">Contact</Link>
        </nav>
        
      <Outlet/>

      </div>
    )
  }
}
