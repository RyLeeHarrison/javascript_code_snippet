// Just and example, DON'T use this.
// Your colleagues will hate you.

const top = {
	a: {
		b: "value"
	}
}

if ({ ...{ ...top
		}.a
	}.b) {
	console.log(`satisfied: ${({...{...top}.a}).b}`)
}