const accountId = 14445;
let accountEmail = "shubhampathare@google.com";
var accountPassword = "12345";
accountCity = "Mumbai";

// accountId = 2; // not allowed

accountEmail = "sp@sp.com";
accountPassword = "696969";
accountCity = "Bengaluru";
let acocuntState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  acocuntState,
]);
