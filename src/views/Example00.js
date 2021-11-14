import { useState } from "react";
import { Example } from "../components/Example";
import { getRandomColor } from "../helpers/getRandomColor";
import { useCountRerenders } from "../hooks/useCountRerenders";

export function Example00({ exampleIndex }) {
  const [color, setColor] = useState(() => getRandomColor());

  const rerenderCount = useCountRerenders();

  return (
    <Example exampleIndex={exampleIndex}>
      <p>Rerenders: {rerenderCount}</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ backgroundColor: color }}>
          <p>Component 1</p>

          <button onClick={() => setColor(getRandomColor)}>
            Set a random color
          </button>
        </div>

        <div style={{ backgroundColor: color }}>
          <p>Component 2</p>

          <button onClick={() => setColor(getRandomColor)}>
            Set a random color
          </button>
        </div>
      </div>
    </Example>
  );
}
