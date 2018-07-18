class ImmutableRestSpread {
    constructor(init = {}) {
        this.init = { ...init };
    }
    get() {
        return this.init
    }
    merge(val) {
        return { ...this.init, ...val }
    }
    getByKey(key) {
        const { [key]: value } = this.init;
        return value;
    }
    
    omit(key) { // rest
        const { [key]: del, ...omitted } = this.init;
        return omitted;
    }
}

const first        = new ImmutableRestSpread({ r: 66, g: 206, b: 244, a: 1 });
const updatedAlpha = new ImmutableRestSpread(first.merge({ a: 0.5 }));
const withoutAlpha = new ImmutableRestSpread(updatedAlpha.omit('a'));

console.log("First Color:   ", first.get())
console.log("Updated Alpha: ", updatedAlpha.get())
console.log("Without Alpha: ", withoutAlpha.get())
console.log('-- Get ImmutableRestSpread by key --')
console.log("Get Red Value: ", first.getByKey('r'));

// export default ImmutableRestSpread