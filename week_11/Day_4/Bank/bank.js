// The bank should have:
// An array of accounts
// The bank should be able to:
//
// Add an account
// Find account by account name.
// Find the largest account.
// Find the total value of all accounts.
// Find the average value of all accounts.
// Find the total value for a certain account type.
const _=require("lodash");

var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function (name){
  let foundAccount = _.find(this.accounts, {name: name});
    return foundAccount;
};


Bank.prototype.largestAccount = function (){
  return _.maxBy(this.accounts, "amount");
};



// Bank.prototype.largestAccount = function (account){
//   let foundAccount = _.sortBy(this.accounts,{value: value});
//   this.accounts.forEach(function(account){
//     if(account.value > foundAccount.value){
//       foundAccount = account;
//     }
//   });
//   return foundAccount
// }


module.exports = Bank;
