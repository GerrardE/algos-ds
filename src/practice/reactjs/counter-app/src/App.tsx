import { useState } from "react";

const useCount = () => {
  const handleCount = (type: string, count: number, setCount: (count: number)=>void) => {
    if (type === "increment") {
      if(count < 10){
        setCount(count+1);
        console.log(`count is ${count}`)
      }
    } else if (type === "decrement") {
      if(count > 0){
        setCount(count-1);
        console.log(`count is ${count}`)
      }
    }
  }

  return handleCount;
}

export const App = ({ col }: { col?: string}) => {
  const [ color, setColor ] = useState(col || "red");

  const [ count, setCount ] = useState(0);

  const handleCount = useCount();

  return (
    <div className="App">
      <h1 style={{ color }}>count: {count}</h1>

      <button onClick={() => handleCount("decrement", count, setCount)}>-</button>
      <button onClick={() => handleCount("increment", count, setCount)}>+</button>

      <br />
      <br />
      <div>
        <label onClick={() => setColor("red")}>
        <input type="radio" name="color" />
          red
        </label>

        <label onClick={() => setColor("blue")}>
        <input type="radio" name="color" />
          blue
        </label>
      </div>
      <br />

      <h4>Requirements </h4>
      <ol className="questions">
        <li>App component should accept [optional] selected `color` prop.</li>
        <li>On radio button click, change `count: 0` message color.</li>
        <li>
          On `red/blue` text label click, change the `count: 0` message color.
        </li>
        <li>
          Make `red/blue` text label clickable (change cursor on hover) for
          better UX.
        </li>
        <li>On `-/+` button click, display the changed count.</li>
        <li>Limit count between 0 and 10 (inclusive).</li>
        <li>
          Whenever count changes, `console.log` a message with the current
          count.
        </li>
        <li>
          Write (and implement) a custom React hook to share count
          increment/decrement functionality across multiple React components.
        </li>
      </ol>
    </div>
  );
};
