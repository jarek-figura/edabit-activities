function verifySubstrs(mainStr, head, body, tail) {
  var t = "My head, body, and tail.";
  var f = "Incomplete.";
  return (mainStr.startsWith(head) && mainStr.endsWith(tail) && mainStr.includes(body)) ? t : f;
}

console.log(verifySubstrs("Onomatopeia", "on", "mato", "ia"));                  // "Incomplete."
console.log(verifySubstrs("Baby", "B", "ab", "y"));                             // "My head, body, and tail."
console.log(verifySubstrs("Centipede", "Cent", "tip", "pede"));                 // "My head, body, and tail."
console.log(verifySubstrs("Hey, you, stop that.", "Hey", ", y ou, st ", "."));  // "Incomplete."
