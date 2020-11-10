import {
  instantiateStreaming,
  ResultObject,
  ASUtil,
} from "assemblyscript/lib/loader";
import { useState } from "react";

export const loadApi = instantiateStreaming(fetch("./as-api.wasm"));

type WasmApi = {
  add: (n1: number, n2: number) => number;
};

export const useWasm = (): WasmApi | undefined => {
  const [api, setApi] = useState<
    | (ResultObject & {
        exports: ASUtil & Record<string, unknown>;
      })
    | undefined
  >();
  loadApi.then((api) => setApi(api));
  return api ? ((api.exports as unknown) as WasmApi) : undefined;
};
