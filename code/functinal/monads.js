// ////  Monads ///////////////////
// /////////////////////////////////
// /// F(x . y) = F(x) . F(y) /////
// // ---------------------- /////
// //////////////////////////////

// BASIC PIECES, 3 functions: unit, bind and the bind argument
// function unit(value)
// function bind(monad, function(value))
// all three functions return a monad

/* The unit function is a constructor (returns a monad object)
* The magic is in the bind function
*
* There are AXIOMS:
* bind(unit(value)), f) === f(value)
* bind(monad, unit) === monad
* bind(bind(monad, f), g) === bind(monad, function (value) { return bind(f(value), g); })
*/

// to avoid defining lots of bind function for different kind of monads
// and manage naming interference
// we turn the function into a method

// to define many different monads with similar properties
// various languages like common lisp have a macro system.
// javascript does not but does have functions and dynamic objects
// so you can get MACROIDS

function MONAD() {
  return function unit(value) {
    const monad = Object.create(null);
    monad.bind = func => func(value);
    return monad;
  };
}

const identity = MONAD();
const monad = identity(' JS FTW! ');
monad.bind(alert);
