export function randomColor() {
  return `#${Math.floor(Math.random() * 125896)
    .toString(16)
    .padStart(6, 0)}`;
}
