import Div from "./div"
import { useState, useEffect } from "react"

const IncrementReducer = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const Increase = () => {
        setCount(count+1)
    }
    
    const Decrement = () => {
        setCount(count-1)
    }

    useEffect(()=>{
        console.log(count)
    },[ count ])

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value) || 0;
        setValue(newValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setCount(count + value)
        setValue(0)

    }

    return(
        <Div>
            <h1>{count}</h1>
            <div className="flex flex-row gap-2 justify-center">
                <button className="primary" onClick={Increase}>Increment</button>
                <button className="secondary" onClick={Decrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add Number</label>
                <input value={value || ''} onChange={handleChange} type="number" className="input" placeholder="Add a number"/>
                <button className="primary">Add to count</button>
            </form>
        </Div>
    )
}


export default IncrementReducer