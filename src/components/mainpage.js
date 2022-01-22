import React, {useState} from 'react' 
import Title from './title'
import Inputboxes from './inputboxes'
import Response from './response'


const Mainpage = () => {

    const [numOne, setNumOne] = useState('')
    const [numTwo, setNumTwo] = useState('')
    
    return(
        <div className= "mainpage">
        <Title />

        <Inputboxes
        numOne= {setNumOne}
        numTwo= {setNumTwo}
        />
        <Response
        firstNum= {numOne}
        secondNum= {numTwo}
        />
     </div>
    )
}
export default Mainpage