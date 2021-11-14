import { useState } from "react";
import { Example } from "../components/Example";
import { getRandomColor } from "../helpers/getRandomColor";
import { useCountRerenders } from "../hooks/useCountRerenders";

export function Example01({ exampleIndex }) {
  const colorState = useState(() => getRandomColor());

  const rerenderCount = useCountRerenders();

  return (
    <Example exampleIndex={exampleIndex}>
      <p>Rerenders: {rerenderCount}</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Component1 colorState={colorState} />

        <Component2 colorState={colorState} />
      </div>
    </Example>
  );
}

const Component1 = ({ colorState: [color, setColor] }) => {
  const rerenderCount = useCountRerenders();

  return (
    <div style={{ backgroundColor: color }}>
      <p>Component 1</p>
      <p>Rerenders: {rerenderCount}</p>

      <button onClick={() => setColor(getRandomColor)}>
        Set a random color
      </button>
    </div>
  );
};

const Component2 = ({ colorState: [color, setColor] }) => {
  const rerenderCount = useCountRerenders();

  return (
    <div style={{ backgroundColor: color }}>
      <p>Component 2</p>
      <p>Rerenders: {rerenderCount}</p>

      <button onClick={() => setColor(getRandomColor)}>
        Set a random color
      </button>
    </div>
  );
};
