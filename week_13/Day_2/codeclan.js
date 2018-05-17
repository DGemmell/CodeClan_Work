use codeclan;
db.dropDatabase();
db.students.insert([{
  name: "Chris",
  favFood: "pizza"
}
{
  name: "Danny",
  favFood: "burgers"
}
]),

db.students.find();

db.instructors.insert([{
  name: "colin",
  favFood: "knowledge"
},
{
  name: "louise",
  favFood: "peanutbutter"
}

]);

db.instructors.find();
