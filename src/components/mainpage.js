import React, {useState} from 'react' 
import Title from './title'
import Inputboxes from './inputboxes'
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
     </div>
    )
}
export default Mainpage