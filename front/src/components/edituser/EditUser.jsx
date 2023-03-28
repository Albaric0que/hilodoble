
import React, { Component } from 'react'
import axios from 'axios'

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        const udata = localStorage.getItem('user')
        const odata = JSON.parse(udata)
        this.state = {
        name: odata.user.name,
        surname: odata.user.surname,
        email: odata.user.email,
        phone: odata.user.phone,
        city: odata.user.city,
        address: odata.user.address,
        postcode: odata.user.postcode,
        userId: props.match.params.id // add userId to state

        errors: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
            const user = {
            userId = this.state.id,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phone: this.state.phone,
            city: this.state.city,
            address: this.state.address,
            postcode: this.state.postcode,
            
            }
        
            console.log('this.props:', this.props)
        
            const userId = this.props.match && this.props.match.params && this.props.match.params.id
        
            console.log('userId:', userId)
        
            if (!userId) {
            console.error('User ID not found in props.')
            return
            }
        
            axios.put(`http://127.0.0.1:8000/api/user/${userId}`, user)
            .then(response => {
                if(response.data.status === 'success'){
                alert('User updated successfully!')
                window.location.href='/dashboard'
                } else {
                this.setState({
                    errors: response.data.errors
                })
                }
            })
        }
        

    handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
        [name]: value
        })
    }

    render() {
        return (
        <div className="container mt-5">
            <h1>Edit User</h1>
            <hr />
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
                {this.state.errors['name'] && <div className="text-danger">{this.state.errors['name'][0]}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname</label>
                <input type="text" className="form-control" id="surname" name="surname" value={this.state.surname} onChange={this.handleInputChange} />
                {this.state.errors['surname'] && <div className="text-danger">{this.state.errors['surname'][0]}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                {this.state.errors['email'] && <div className="text-danger">{this.state.errors['email'][0]}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                {this.state.errors['phone'] && <div className="text-danger">{this.state.errors['phone'][0]}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={this.state.city} onChange={this.handleInputChange} />
                    {this.state.errors['city'] && <div className="text-danger">{this.state.errors['city'][0]}</div>}
                </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} />
                {this.state.errors['address'] && <div className="text-danger">{this.state.errors['address'][0]}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="postcode" className="form-label">Postcode</label>
                <input type="text" className="form-control" id="postcode" name="postcode" value={this.state.postcode} onChange={this.handleInputChange} />
                {this.state.errors['postcode'] && <div className="text-danger">{this.state.errors['postcode'][0]}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
        )
    }
}