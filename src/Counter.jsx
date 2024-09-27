import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="increment-button" onClick={Increment}>Increment</button>
            <button className="decrement-button" onClick={Decrement}>Decrement</button>
            <button className="reset-button" onClick={Reset}>Reset</button>
        </div>
    );

}

export default Counter;