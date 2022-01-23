import React, {useState} from 'react' 
import Title from './title'

const Mainpage = () => {

    const [numOne, setNumOne] = useState('')
    const [numTwo, setNumTwo] = useState('')
    const [operation, setOperation] = useState('+')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')
        
   const isValidCalc = () => {
        // eslint-disable-next-line no-unused-expressions
        !Number.isNaN(Number(numOne)) &&
        !Number.isNaN(Number(numTwo)) &&
        numOne !== "" && numTwo !== "";
      }

    const calculate = () => {
        if(!isValidCalc()){
            setAnswer('')
            return setError('Provide valid numbers')
        }
        setError('')
        setAnswer('')

        switch (operation) {
           case '+':
               return setAnswer((Number(numOne)) + (Number(numTwo)))
           case '-':
               return setAnswer((Number(numOne)) - (Number(numTwo)))
           case '*':
               return setAnswer((Number(numOne)) * (Number(numTwo)))
           case '/':
               return setAnswer((Number(numOne)) / (Number(numTwo)))
            default: 
                return setError('Invalid input, try again')
       }          
    }

    return(
        <div className= "mainpage">
        <Title />

            <div className="Inputs">
                <input type="text" value={numOne} onChange={(event) => setNumOne(event.target.value)} />

                <select value={operation} onChange={(event) => setOperation(event.target.value)}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="*"> * </option>
                    <option value="/"> / </option>
                </select>

                <input type="text" value={numTwo} onChange={(event) => setNumTwo(event.target.value)} />

                <button type="button" onClick={calculate}> =</button>

                <input type="text" value={answer}/>
           
           
</div>
</div> 
           )
}

export default Mainpage