//camelize('background-color') // => "backgroundColor"
function camelize(string) {
  return string.replace(/-(.)/g, (_, character) => character.toUpperCase());
}