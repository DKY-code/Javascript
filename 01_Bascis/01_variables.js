const accountId = 1234123
let accountEmail = "Deep@gmail.com"
var accountPassword = "1234567"
accountCity = "BLR"
let accountState;

// accountId = 2 // not allowed

accountEmail = "deep@deep.com"
accountPassword = "98719871"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
