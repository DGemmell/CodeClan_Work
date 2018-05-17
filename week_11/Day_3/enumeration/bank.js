// const Bank = function(){
//   this.accounts = [250, 250, 500, 500, 500];
//   this.total = 0;
//
// };
//
// Bank.prototype.calculateTotal = function(){
//   this.total = 0;
//   this.accounts.forEach(function(account){
//     // console.log(this);
//     this.total += account;
//   }.bind(this));
// };
//
// const bank = new Bank();
// console.log("Total before:", bank.total);
//
// bank.calculateTotal();
//
// console.log("Total after:", bank.total);


// another example of binding
const tweetGetter = {
  getTweets: function(callback){
    callback();
  },

  renderHeader: function(){

  },

  render: function(){
    this.getTweets(function(){
      console.log(this);

    }.bind(this));
  }
};

tweetGetter.render();
