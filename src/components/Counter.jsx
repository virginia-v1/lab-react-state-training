import { useState } from "react";

function Counter() {
const [num, setNum] = useState (0)

const increase = () => {
    setNum (num + 1);
 };

 const decrease = () => {
    if (num > 0) {
        setNum (num - 1);
    }
 };

  return (
    <div className = "counter">
     <button onClick={decrease} >-</button>

    <span>{num}</span>

    <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;