import Div from "./div"
import { useState, useEffect, useReducer } from "react"


const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'

const HANDLE_INPUT = 'handleinput'
const SUBMIT_INPUT = 'submitinput'


const reducer = (state, action ) =>{

    switch(action.type){
        case INCREMENT_COUNT: {
            return{
                ...state,
                count: state.count + 1
            };
        }
        case DECREMENT_COUNT: {
            return{
                ...state,
                count: state.count - 1
            };
        }
        case HANDLE_INPUT: 
            return{
                ...state,
                value: action.payload
            };
        
        case SUBMIT_INPUT: 
            return{
                ...state,
                count: state.count + state.value,
                value: 0
            };
        
        default: return state
    }


}

const IncrementReducer = () => {
    // const [count, setCount] = useState(0)
    // const [value, setValue] = useState(0)

    const [ state, dispatch ] = useReducer(reducer, {
        count: 0,
        value: 0
    })

    const Increase = () => {
        //setCount(count+1)
        dispatch({
            type: INCREMENT_COUNT
        })
    }
    
    const Decrement = () => {
        // setCount(count-1)
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    // useEffect(()=>{
    //     console.log(count)
    // },[ count ])

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value) || 0;
        // setValue(newValue)
        dispatch({
            type: HANDLE_INPUT,
            payload: newValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // setCount(count + value)
        // setValue(0)
        dispatch({
            type: SUBMIT_INPUT
        })
        
    }

    return(
        <Div>
            <h1>{state.count}</h1>
            <div className="flex flex-row gap-2 justify-center">
                <button className="primary" onClick={Increase}>Increment</button>
                <button className="secondary" onClick={Decrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add Number</label>
                <input value={state.value || ''} onChange={handleChange} type="number" className="input" placeholder="Add a number"/>
                <button className="primary">Add to count</button>
            </form>
        </Div>
    )
}


export default IncrementReducer