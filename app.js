const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,

  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

  rating: 7,
  review: "Bestembest"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

// person.save();




Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }
  else{
    mongoose.connection.close();
    console.log(fruits);
  }
});

Fruit.updateOne({_id:"6053ced2b71d9d62d4f33be7"},{name: "Peach"}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Updated!");
  }
});

Fruit.deleteOne({name: "Peach"}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Deleted!");
  }
});
