var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

// filter to get the details back from the Array
Bank.prototype.accountByName = function (name){
  var foundAccount = this.accounts.find(function(account){
    return account.name === name;
  })
  return foundAccount;
}


// find the largestAccount from the Array
Bank.prototype.largestAccount = function(){
  var foundAccount = this.accounts[0];
  this.accounts.forEach(function(account){
    if(account.value > foundAccount.value){
      foundAccount = account;
    }
  });
  return foundAccount
}

Bank.prototype.payInterest = function(){
  this.accounts.forEach(function(account){
    // account.value / 100 * 10.00
    account.value = account.value * 1.1;
  });
};


// Bank.prototype.businessAccounts = function(){
//   const account = account.filter(account => account.type.business);
// }
// console.log(account);


module.exports = Bank;
