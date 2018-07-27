const testSpeed = (func) => {
    const start = new Date().getTime();
    func.call()
    const end = new Date().getTime();
    const diff = end - start;

    return console.log(`Total time: ${diff} milliseconds`)
}

testSpeed((a) => {
    console.log("hello")
})