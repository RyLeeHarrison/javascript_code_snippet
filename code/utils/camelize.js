//camelize('background-color') // => "backgroundColor"
export function camelize(string) {
  return string.replace(/-(.)/g, (_, character) => character.toUpperCase());
}