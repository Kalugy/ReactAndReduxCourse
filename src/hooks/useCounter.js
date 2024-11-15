import { useEffect , useState } from "react"

export const useCounter = () => {
    const [count, setCount] = useState(0)

    const Increase = () => {
        setCount(count+1)
    }
    
    useEffect(()=>{
        console.log(count)
    },[ count ])

    return{
        count,
        Increase,
    }

}
