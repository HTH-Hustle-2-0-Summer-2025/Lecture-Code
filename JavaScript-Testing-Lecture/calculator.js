const imAVariable = "hey Victoria";

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // Export the functions (packing them)
  module.exports = { add, subtract, imAVariable };
