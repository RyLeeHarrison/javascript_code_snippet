/**
 * [Very Experimental]
 * Requires a transpiler:
 * https://babeljs.io/docs/en/next/babel-plugin-proposal-pipeline-operator.html
 */

const double = (n) => n * 2;
const increment = (n) => n + 1;

let withoutPipeline = double(increment(double(double(5)))); // 42

console.log(`without: ${withoutPipeline}`)

const withPipeline = 5
    |> double
    |> double
    |> increment
    |> double; // 42

console.log(`with: ${withPipeline}`)


// Could be useful for something like:
// class Comment extends Model |> Editable |> Sharable {

// }