import { useRef } from "react";

export function useCountRerenders() {
  const countRef = useRef(0);
  console.log("test", countRef.current);

  // TODO: why is this going up by two?
  countRef.current = countRef.current + 1;

  return countRef.current;
}
