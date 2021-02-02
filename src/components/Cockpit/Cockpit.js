import React from 'react'

const Cockpit = (props) => {
    return (
        <>
            <h1>Hi Im a React App</h1>
            <p>This is really working</p>
            <button 
            className={'button'}
            onClick={props.toggle}>
            Toggle Persons
            </button>
        </>
    )
}

export default Cockpit
