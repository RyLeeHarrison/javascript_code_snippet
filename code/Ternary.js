const Ternary = new Object();
 
Ternary.not = a => {
  if (typeof a == "boolean") return !a;
  if (a == undefined) return undefined;
  throw("Invalid Ternary Expression.");
}
 
Ternary.and = (a, b) => {
  if (typeof a == "boolean" && typeof b == "boolean") return a && b;
  if ((a == true && b == undefined) || (a == undefined && b == true)) return undefined;
  if ((a == false && b == undefined) || (a == undefined && b == false)) return false;
  if (a == undefined && b == undefined) return undefined;
  throw("Invalid Ternary Expression.");
}
 
Ternary.or = (a, b) => {
  if (typeof a == "boolean" && typeof b == "boolean") return a || b;
  if ((a == true && b == undefined) || (a == undefined && b == true)) return true;
  if ((a == false && b == undefined) || (a == undefined && b == false)) return undefined;
  if (a == undefined && b == undefined) return undefined;
  throw("Invalid Ternary Expression.");
}

Ternary.ifThen = (a, b) => Ternary.or(Ternary.not(a), b) // A -> B is equivalent to -A or B
Ternary.iff = (a, b) => Ternary.and(Ternary.ifThen(a, b), Ternary.ifThen(b, a)) // A <=> B is equivalent to (A -> B) and (B -> A)