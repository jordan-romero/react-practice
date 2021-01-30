import React, { Component } from 'react'
import Person from './Person/Person'

export default class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Jordan', age: 31 },
      { name: 'Tracie', age: 40 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  }
}

