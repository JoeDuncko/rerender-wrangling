import { useRef } from "react";

export function useCountRerenders({
  exampleIndex = null,
  componentIndex = null,
}) {
  const countRef = useRef(0);

  countRef.current = countRef.current + 1;

  if (exampleIndex) {
    console.log(
      `Example ${exampleIndex} rerendered`,
      countRef.current,
      "times"
    );
  } else if (componentIndex) {
    console.log(
      `Component ${componentIndex} rerendered`,
      countRef.current,
      "times"
    );
  }

  return countRef.current;
}
