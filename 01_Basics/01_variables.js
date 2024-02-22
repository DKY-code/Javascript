const accountId = 1234123
let accountEmail = "Deep@gmail.com"
var accountPassword = "1234567"
accountCity = "BLR"
let accountState;


// accountId = 2 // not allowed because cons can not be changed.

accountEmail = "deep2@deep.com"
accountPassword = "987219871"
accountCity = "GGN"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
