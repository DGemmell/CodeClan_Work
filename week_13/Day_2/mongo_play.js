user farm;
db.dropDatabase();

use farm;
db.animals.insert({
  name: "erik",
  type: "polar bear"
});

db.animals.insert({
  name: "barry",
  type: "pig"
});

// db.animals.find();

db.animals.update({name: "barry"},{
  $set: {type : "Goose"}

})

db.animals.remove({name: "erik"});
