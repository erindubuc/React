import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
        }
// function to fire each time an input field changes
    handleChange = (e) => {
        this.setState({
            // grab correct state prop names with string containing name, age, or belt
            [e.target.id]: e.target.value
            })
        }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} /> 
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
            )
        }
    }
    
    export default AddNinja