import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    const udata = localStorage.getItem('user')
    const odata = JSON.parse(udata)
    let loggedIN = true
    if (udata == null){
      loggedIN = false
    }
    this.state = {
      user : odata.user,
      loggedIN
    }
  }
 
  render() {
    if(this.state.loggedIN === false){
      return  <Navigate to="/sign-in" />
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/dashboard">React.js and Laravel App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <a className="nav-link" href="/logout">Logout</a>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <h1>Welcome to your profile <span className="text-primary">{this.state.user.name} {this.state.user.surname}</span></h1>
          <hr />
          <h3>User Data</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{this.state.user.name}</td>
              </tr>
              <tr>
                <td>Surname:</td>
                <td>{this.state.user.surname}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{this.state.user.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{this.state.user.phone}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{this.state.user.city}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{this.state.user.address}</td>
              </tr>
              <tr>
                <td>Postcode:</td>
                <td>{this.state.user.postcode}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={() => {window.location.href='/edituser'}}>Update</button>
        </div>
      </div>
    )
  }
}

