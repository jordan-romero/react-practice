import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  render (){
    props.persons.map((person, index) => {
      return <Person {...person} 
      onClick={() => props.onClick(index)} 
      key={person.id}
      onChange={(event) => props.onChange(event, person.id)}/>
    })
  }
}



export default Persons
