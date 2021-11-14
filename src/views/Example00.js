import { useState } from "react";
import { Example } from "../components/Example";
import { useCountRerenders } from "../hooks/useCountRerenders";
// See https://css-tricks.com/snippets/javascript/random-hex-color/
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export function Example00() {
  const exampleIndex = 0;

  const [color, setColor] = useState(() => getRandomColor());

  const rerenderCount = useCountRerenders();

  return (
    <Example exampleIndex={exampleIndex}>
      <p>Rerenders: {rerenderCount}</p>

      <button onClick={() => setColor(getRandomColor)}>
        Set a random color
      </button>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ backgroundColor: color }}>
          <p>Component 1</p>
        </div>

        <div style={{ backgroundColor: color }}>
          <p>Component 2</p>
        </div>
      </div>
    </Example>
  );
}
