import * as React from "react";
import waApi from "./wa-api";
import { useEffect, useState } from "react";

function App() {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    waApi.then((api) => {
      setApi(api.exports);
    });
  }, []);

  return (
    <p>Hello World {api && api.add ? api.add(5, 8) : JSON.stringify(api)}</p>
  );
}

export default App;
