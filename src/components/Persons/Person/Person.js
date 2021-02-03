import React, { Component } from 'react'
import './Person.css'
import styled from 'styled-components'

class Person extends Component {
    render() {
        return (
            <StyledDiv>
                 <p onClick={props.onClick}>My name is {props.name} and I am {props.age} years old!</p> 
                 <p>{props.children}</p>
                 <input type='text' onChange={props.onChange} value={props.name}/>
             </StyledDiv>
             )
    }
    
    }

export default Person
