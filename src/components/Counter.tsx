import React, {useState} from "react";
import classes from './Counter.module.scss'

export function Counter() {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}