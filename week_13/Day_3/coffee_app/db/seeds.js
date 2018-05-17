use my_coffee_db;

db.dropDatabase();

db.coffee.insert({
  roaster: "crankhuse",
  country: "indonesia",
  rating: 4,
  name: "wahana"
});
