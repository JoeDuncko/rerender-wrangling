import { Example00 } from "../views/Example00";

export const examples = [
  {
    description: "A component with two elements that share state",
    component: <Example00 />,
  },
  {
    description:
      "A component with two subcomponents that share state ('lifting state up')",
  },
  {
    description:
      "A component with two subcomponents that are deeply nested and share state ('prop drilling')",
  },
  {
    description:
      "A component with many subcomponents, including two that are deeply nested and share state via prop drilling",
  },
  {
    description:
      "A component with many subcomponents, including two that are deeply nested and share state via prop drilling, and one slow component",
  },
];
