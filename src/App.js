import React, { useState } from 'react'
import Person from './Person/Person'

const App = () => {
  const [ personsState, setPersons ] = useState({persons: [
    { name: 'Max', age: 30 },
    { name: 'Jordan', age: 31 },
    { name: 'Tracie', age: 40 }
  ]})

  const switchNameHandler = () => {
        setPersons({persons: [
          { name: 'Meks', age: 29 },
          { name: 'Jordy', age: 31 },
          { name: 'Tracie', age: 40 }
        ]
        })
      }
return (
    <div className="App">
      <h1>Hi Im a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  )
}

export default App

