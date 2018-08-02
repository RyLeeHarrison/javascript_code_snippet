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

const words = ['marshmallow', 'chocolate', 'toffee'];

const encoded = words.map(encodeMTF);
const decoded = encoded.map(decodeMTF);

console.log( // ==> 
             // [ [ 12, 1, 17, 18, 10, 4, 4, 14, 0, 16, 22 ],
             // [ 2, 7, 14, 2, 1, 12, 4, 19, 8 ],
             // [ 19, 15, 7, 0, 7, 0 ] ]  
    encoded
);

console.log( // ==> [ 'marshmallow', 'chocolate', 'toffee' ]
    decoded
);