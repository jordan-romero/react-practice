import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p onClick={props.onClick}>My name is {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>
            <input type='text' onChange={props.onChange}/>
        </div>
        )
    }

export default Person
