// map_value(value, fromLow, fromHigh, toLow, toHigh)

const map_value = (x, in_min, in_max, out_min, out_max) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

const input = 10;
const output = map_value(input, 0, 1023, 0, 255);

console.log(output); // ==> 2.4926686217008798