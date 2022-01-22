import React from 'react'

const Inputboxes = (props) => {

    const handleNumOne = event => {
        props.SetNumOneProp(event.target.value)
    }

    const handleNumTwo = event => {
        props.SetNumTwoProp(event.target.value)
    }

    return (
        <div className= "Inputs">
           <input type="text" onChange= {handleNumOne} />
            <input type="text" onChange= {handleNumTwo} />
        </div>
    )
}
export default Inputboxes