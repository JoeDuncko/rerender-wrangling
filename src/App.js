import { Route, Routes } from "react-router-dom";
import { examples } from "./constants/examples";
import { Navigation } from "./views/Navigation";

function App() {
  return (
    <div>
      <h1>React Rerender Wrangling examples</h1>
      <Routes>
        <Route path="/" element={<Navigation />} />
        {examples.map((example, index) => (
          <Route
            key={index}
            path={`/example${index}`}
            element={example.component}
          />
        ))}
      </Routes>
      <footer>
        by <a href="https://joeduncko.com/">Joe Duncko</a>
      </footer>
    </div>
  );
}

export default App;
