const N = 50

const arrayFrom = Array.from(new Array(N), (val, index) => (index + 1))

const arrayApply = Array.apply(null, {
    length: N
}).map((value, index) => {
    return index + 1
})

for (i in [...Array(N)]) {
    console.log(i)
}