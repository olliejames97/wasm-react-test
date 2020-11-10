import * as React from "react";
import { useWasm } from "./wa-api";

function App() {
  const api = useWasm();
  if (!api) {
    return <p>Loading</p>;
  }

  return (
    <p>Hello World {api && api.add ? api.add(5, 8) : JSON.stringify(api)}</p>
  );
}

export default App;
