import { Route, Routes } from "react-router-dom";
import { ExampleO1 } from "./views/Example01";
import { Navigation } from "./views/Navigation";

function App() {
  return (
    <div>
      <h1>React Rerender Wrangling examples</h1>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/example1" element={<ExampleO1 />} />
      </Routes>
      <footer>
        by <a href="https://joeduncko.com/">Joe Duncko</a>
      </footer>
    </div>
  );
}

export default App;
