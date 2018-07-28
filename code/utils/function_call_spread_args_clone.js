const sendArg = ({ ...state }, cb) => cb(state)

const dummy = ({ firstName, lastName, count }) => {
	count++;
	count++;
	name = `${firstName} ${lastName}`;
	
	return ({ name, count })
}

const initalState = {
	firstName: "RyLee",
	lastName: "Harrison",
	count: 1,
}

const dummyState = sendArg(initalState, dummy)
const murged = { ...initalState, ...dummyState }

console.log("murged: ", murged)
console.log("dummyState: ", dummyState)
console.log("initalState: ", initalState)
