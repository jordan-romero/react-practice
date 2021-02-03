import React, { useEffect } from 'react'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('cockpit use effect')
        setTimeout(() => {
            alert('saved data')
        }, 1000)
    }, [props.persons])

    return (
        <>
            <h1>{props.title}</h1>
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
