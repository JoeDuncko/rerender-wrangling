import { Link } from "react-router-dom";
import { examples } from "../constants/examples";

export function Example({ exampleIndex, children }) {
  const example = examples[exampleIndex];

  const nextExampleIndex = exampleIndex + 1;

  const previousExampleIndex = exampleIndex - 1;

  return (
    <div>
      <h2>
        Example {exampleIndex}) {example.description}
      </h2>

      {children}

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {previousExampleIndex > 0 ? (
          <Link to={`/example${previousExampleIndex}`}>Prevous example</Link>
        ) : (
          <span style={{ color: "gray" }}>Prevous example</span>
        )}
        <Link to="/">Navigation</Link>
        {nextExampleIndex !== examples.length ? (
          <Link to={`/example${nextExampleIndex}`}>Next example</Link>
        ) : (
          <span style={{ color: "gray" }}>Next example</span>
        )}
      </div>
    </div>
  );
}
