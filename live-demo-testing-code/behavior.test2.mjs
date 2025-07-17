//We use import instead of require
//You must include the .js extension when using import in Node.js.
// behavior.test2.mjs
import { makeSandwich } from './behavior2.mjs';

console.log(makeSandwich()); // ✅ Will print "PB&J"


//Then we run node behavior.test2.mjs
