import Div from "./div"

import { useCounter } from "../../hooks/useCounter";

const Increment = () => {
    const { count, Increase } = useCounter();

    return(
        <Div>
            <h1>{count}</h1>
            <button className="primary" onClick={Increase}>Increment</button>
        </Div>
    )
}


export default Increment