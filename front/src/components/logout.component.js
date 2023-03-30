import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("user")
    }
  render() {
    return (
      <div>
        <h3>Te has desconectado correctamente</h3>
        <Link to="/sign-in">Login</Link>
      </div>
    )
  }
}
