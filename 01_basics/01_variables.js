const accountId = 144553
let accountEmail = "divye@gmail.com"
var accountPassword = "12345"
accountCity = "Patiala"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope
 and functional scope
*/


console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
