const BinaryToAscii = (bin) => [...bin.match(/[0-1]{1,8}/g)].map((a) => String.fromCharCode(parseInt(a, 2))).join("")

const AsciiToBinary = (ascii) => {
    let bin = "";
    [...ascii].map((a, i, acc) => {
        a = ascii.charCodeAt(i);
        b = a.toString(2);
        if (b.length < 8) b = '0' + b;
        if (b.length < 8) b = '0' + b;
        if (b.length < 8) b = '0' + b;
        bin += b;
    })

    return bin;
}

const input = "RyLee";

const bin   = AsciiToBinary(input);
const ascii = BinaryToAscii(bin);

console.log("input:  " + input);
console.log("Binary: " + bin);
console.log("ascii:  " + ascii);

// ==> input:  RyLee
// ==> Binary: 0101001001111001010011000110010101100101
// ==> ascii:  RyLee