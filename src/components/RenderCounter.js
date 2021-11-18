import React, { useRef } from "react";
import { useForceUpdate} from "../customHooks";

export function RerenderCounter() {
  let count = useRef(0);
  let forceUpdate = useForceUpdate();
  ++count.current;
  
  return (
    <div>
      <h1>{count.current} times rendered</h1>
      <button onClick={forceUpdate}>Re-render</button>
    </div>
  );
}