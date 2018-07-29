const encodeMTF = word => {
const init = {
    wordAsNumbers: [],
    charList: [...'abcdefghijklmnopqrstuvwxyz']
};

return [...word].reduce((acc, char) => {
    const charNum = acc.charList.indexOf(char);
    acc.wordAsNumbers.push(charNum);
    acc.charList.unshift(acc.charList.splice(charNum, 1)[0]);
    return acc;
}, init).wordAsNumbers
};

const decodeMTF = numList => {
    const init = {word: '', charList: [...'abcdefghijklmnopqrstuvwxyz']};
    return numList.reduce((acc, num) => {
        acc.word += acc.charList[num];
        acc.charList.unshift(acc.charList.splice(num, 1)[0]);
        return acc;
    }, init).word;
};

//test our algorithms
const words = ['broood', 'bananaaa', 'hiphophiphop'];

const encoded = words.map(encodeMTF);
const decoded = encoded.map(decodeMTF);

//print results
console.log("from encoded:");
console.log(encoded);

console.log("from decoded:");
console.log(decoded);