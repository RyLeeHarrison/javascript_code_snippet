const object = {
	hello: "world",
	first: "Bob",
	name: {
		first: "RyLee"
	}
};

const mapify = (val) => [...new Map(Object.entries(val).map((v, i) => ([...new Set(v, i)])))]; 

const map = mapify(object)

for (let [k, v] of map.entries()) {
	console.log(k, v)
}

// ==>
// 0 [ 'hello', 'world' ]
// 1 [ 'first', 'Bob' ]
// 2 [ 'name', { first: 'RyLee' } ]