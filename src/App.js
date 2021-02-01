import React, { Component } from 'react'
import Person from './Person/Person'

export default class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Jordan', age: 31 },
      { name: 'Tracie', age: 40 }
    ],
    showPersons: false, 
  }

  // switchNameHandler = (newName) => {
  //   this.setState({persons: [
  //     { name: newName, age: 29 },
  //     { name: 'Jordy', age: 31 },
  //     { name: 'Tracie', age: 40 }
  //   ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Meks', age: 29 },
      { name: event.target.value, age: 31 },
      { name: 'Tracie', age: 40 }
    ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div > 
          {this.state.persons.map(person => {
            return <Person {...person}/>
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

