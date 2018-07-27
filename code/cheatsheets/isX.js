/**
 * is(X) cheatsheet
 * 
 * isNull(null)                            // ==> true
 * isUndefined(undefined)                  // ==> true
 * isNullOrUndefined(undefined)            // ==> true
 * isString('foo bar')                     // ==> true
 * isNumber(100)                           // ==> true
 * isBoolean(true)                         // ==> true
 * isArray([0,1,2,3,4,5,6,7,8,9])          // ==> true
 * isSymbol(Symbol("sdadas"))              // ==> true
 * isObject({ a: "b" })                    // ==> true
 * isFunction(Function)                    // ==> true
*/

const isSymbol = (value) => (typeof value === 'symbol');
const isString = (value) => (typeof value === 'string');
const isBuffer = (value) => (Buffer.isBuffer(value));
const isFunction = (value) => (typeof value === 'function');
const isArray = (value) => Array.isArray(value);
const isObject = (value) => (value !== null && typeof value === 'object');
const isBoolean = (value) => (typeof value === 'boolean');
const isNumber = (value) => (typeof value === 'number');
const isNaN = (value) => (value === NaN);
const isNull = (value) => (value === null);
const isUndefined = (value) => (value === undefined);
const isNullOrUndefined = (value) => (value === null || value === undefined);
const isPrimitive = (value) => ((typeof value !== 'object' && typeof value !== 'function') || value === null);

module.exports = {
    isSymbol,
    isString,
    isBuffer,
    isFunction,
    isArray,
    isObject,
    isBoolean,
    isNumber,
    isNaN,
    isNull,
    isUndefined,
    isNullOrUndefined,
    isPrimitive,
}

// const {
//     isSymbol, 
//     isString, 
//     isBuffer, 
//     isFunction, 
//     isArray, 
//     isObject, 
//     isBoolean, 
//     isNumber, 
//     isNaN, 
//     isNull, 
//     isUndefined, 
//     isNullOrUndefined, 
//     isPrimitive
// } = require('./filename')