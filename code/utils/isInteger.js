const isNum = (hwm) => {
  if (hwm != null) {
    if (!Number.isInteger(hwm) || hwm < 0) {
      throw new TypeError(hwm, 'Not integer');
    }

    return Math.floor(hwm);
  }
}

console.log(
  isNum(10)
)