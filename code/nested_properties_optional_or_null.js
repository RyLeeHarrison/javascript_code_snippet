const top = {
	a: {
		b: "value"
	}
}

if ({...{...top}.a}.b) {
	console.log(`satisfied: ${({...{...top}.a}).b}`)
}