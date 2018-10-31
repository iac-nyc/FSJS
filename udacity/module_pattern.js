/*
// Module Pattern
// Immediately-Invoked-Function-Expressions
// leaving the other code out of the global scope.

*/


var Module = (function () {
  
  return {
    publicMethod: function () {
      // code
    }
  };

})();

Module.publicMethod();