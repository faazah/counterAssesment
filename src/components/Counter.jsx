import { useState } from "react";
import "./Counter.css";

export const Counter = () =>{
    const [counter, setCounter] = useState(1);
    let maxVal = 1000;

    const handleInc = () =>{
        if(counter === maxVal)
            alert("The Maximum Value is reached");
        else
            setCounter(counter + 1)
    }

    const handleDec = () =>{
        setCounter(counter - 1)
    }

    const handleChange = (event) =>{
        let num = +(event.target.value);
        if(num > maxVal){
            alert("The maximum Value is upto 1000");
            return;
        }else
            setCounter(num)
    }
    return (
        <div id="container">
            <button onClick={handleDec}>-</button>
            <input type="number" onChange={handleChange} value={counter}/>
            <button onClick={handleInc}>+</button>
        </div>
    )
}