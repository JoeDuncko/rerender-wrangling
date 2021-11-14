// See https://css-tricks.com/snippets/javascript/random-hex-color/
export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
