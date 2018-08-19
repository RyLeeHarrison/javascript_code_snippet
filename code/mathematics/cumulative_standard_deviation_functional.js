const a = ((xs) => xs.reduce(({sum, squaresSum, stages}, x, i) => {
    const n = i + 1;
    const sum_ = sum + x;
    const squaresSum_ = squaresSum + (x * x);

    return {
        sum: sum_,
        squaresSum: squaresSum_,
        stages: stages.concat(
            Math.sqrt((squaresSum_ / n) - sum_ / n ** 2)
        )
    };
}, {
    sum: 0,
    squaresSum: 0,
    stages: []
}))

console.log(
    a([2, 4, 4, 4, 5, 5, 7, 9])
)