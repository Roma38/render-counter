import { useState } from "react";

export function useForceUpdate() {
  let [value, setState] = useState(true);
  
  return () => setState(!value);
}
