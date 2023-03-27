import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {

  
  constructor(props) {
    super(props);
    const udata = localStorage.getItem('user');
    const odata = JSON.parse(udata);
    let loggedIN = true;
    if (udata == null) {
      loggedIN = false;
    }
    this.state = {
      user: odata.user,
      loggedIN,
    };
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleUpdate = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/sign-in" />;
    }
  
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/auth/updateUser/${this.state.user.id}`,
        this.state.user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem('user', JSON.stringify(response.data));
      alert('User data updated successfully.');
    } catch (error) {
      console.error('Error:', error.response.data);
      alert('Failed to update user data.');
    }
    
  };
  
  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <div>
        {/* Rest of the Navbar code */}
        <h1 className="text-black mt-5">
          Welcome to your profile{' '}
          <span className="text-primary">{this.state.user.name} </span>
        </h1>
        <a class="nav-link" href="/logout">logout </a>
              
        <form onSubmit={this.handleUpdate}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.user.name}
              onChange={this.handleChange}
            />
          </div>
          {/* Add more input fields for other user properties */}
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}