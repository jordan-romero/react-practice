import React from 'react'
import './Person.css'


const Person = (props) => {

    const style ={
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person' style={style}>
            <p onClick={props.onClick}>My name is {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>
            <input type='text' onChange={props.onChange} value={props.name}/>
        </div>
        )
    }

export default (Person)
