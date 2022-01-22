import React from 'react'

const Inputboxes = (props) => {

    const handleNumOne = event => {
        props.SetNumOne(event.target.value)
    }

    const handleNumTwo = event => {
        props.SetNumTwo(event.target.value)
    }

    return (
        <div className= "Inputs">
           <input type="text" onChange= {handleNumOne} />
            <input type="text" onChange= {handleNumTwo} />
        </div>
    )
}
export default Inputboxes