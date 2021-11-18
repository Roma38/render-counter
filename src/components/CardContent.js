import React from "react";
import { RerenderCounter } from "./RenderCounter";
import { useForceUpdate } from "../customHooks";

export function CardContent() {
  let forceUpdate = useForceUpdate();

  return (
    <div className="card">
      <RerenderCounter />
      <div>....othercont</div>
      <button onClick={forceUpdate}>Update Card</button>
    </div>
  );
}

