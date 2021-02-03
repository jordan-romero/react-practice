import React, { Component } from 'react'
import './Person.css'


class Person extends Component {
    render() {
        return (
            <div>
                 <p onClick={this.props.onClick}>My name is {this.props.name} and I am {this.props.age} years old!</p> 
                 <p>{this.props.children}</p>
                 <input type='text' onChange={this.props.onChange} value={this.props.name}/>
             </div>
             )
    }
    
    }

export default Person
