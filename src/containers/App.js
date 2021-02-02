import React, { Component } from 'react'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Max', age: 30 },
      {id: 2, name: 'Jordan', age: 31 },
      {id: 3, name: 'Tracie', age: 40 }
    ],
    showPersons: false, 
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id 
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person 

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div > 
          <Persons 
          persons={this.state.persons}
          onClick={this.deletePersonHandler}
          onChange={this.nameChangedHandler}/>
        </div> 
      )
    }

    return (
      
      <div className="App">
        <Cockpit toggle={this.togglePersonsHandler}/>
        {persons}
      </div>
      
    )
  }

}
export default (App)
