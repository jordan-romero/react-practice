import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log("get derived state from props")
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  render (){
    return this.props.persons.map((person, index) => {
      return <Person {...person} 
      onClick={() => this.props.onClick(index)} 
      key={person.id}
      onChange={(event) => this.props.onChange(event, person.id)}/>
    })
  }
}



export default Persons
