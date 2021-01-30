import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <Person name='Max' age='30'/>
        <Person name='Jordan' age='31'/>
        <Person name='Tracie' age='40'/>
      </div>
    )
  }
}

