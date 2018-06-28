// Useing the Object "rest" and "spread" operator to omit values

const rgb = {
    r: 255,
    g: 255,
    b: 0,
    a: 0.1
};

const rgbClone = { ...rgb, a: 0.5 }

// rest
const { a, ...withoutAlpha } = rgbClone

console.log("Removed value:      ", a)
console.log("First Object:       ", rgb)
console.log("First Object Clone: ", rgbClone)
console.log("key a omitted:      ", withoutAlpha)