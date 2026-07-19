import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
    </div>
  )
}

export default Counter;