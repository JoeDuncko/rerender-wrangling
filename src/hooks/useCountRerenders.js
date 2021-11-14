import { useRef } from "react";

export function useCountRerenders({ exampleIndex }) {
  const countRef = useRef(0);

  countRef.current = countRef.current + 1;

  console.log(`Example ${exampleIndex} rerendered`, countRef.current, "times");

  return countRef.current;
}
