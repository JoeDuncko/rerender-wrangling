import { Link } from "react-router-dom";
import { examples } from "../constants/examples";

export function Navigation() {
  return (
    <div>
      <ul>
        {examples.map((example, index) => (
          <li>
            <Link to={`/example${index}`}>
              Example {index}: {example.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
