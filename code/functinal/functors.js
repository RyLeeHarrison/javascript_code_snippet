// //// Functors ///////////////////
// /////////////////////////////////
// /// F(x . y) = F(x) . F(y) /////
// // ---------------------- /////
// //////////////////////////////

// Functors are defined as " homomorphisms between categories" , let us better understand this meaning:
// Homo = same, same
// Morphisms = functions that maintains structure
// Category = type
// According to theory, the function Fis a Functor when the two common functions combinable fand g, as in the example below:

// compose = ( ... ) . map( f ) .map( g )

function compose(f , g) {
  return function(x) { return f(g(x));};
}

function plus2(value) {
  console.log(' plus2 value enter: ' , value);
  return value + 2 ;
}

function plus1(value) {
  console.log(' plus1 value enter: ' , value);
  return value + 1 ;
}

console.log( // [4, 5, 6]
    [ 1 , 2 , 3 ].map(compose(plus1, plus2))
);