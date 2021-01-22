//1 
const hello = 'world'; 
console.log(hello);      

//2
const needle = 'haystack';
function test(){
  const needle = 'magnet';
  console.log(needle);
}
test();

//3 
const brendan = 'super cool';
function print(){
  const brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

//4
const food = 'chicken';
console.log(food);
function eat(){
  let food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
eat();

//5
const food = 'chicken';
console.log(food);
const mean = function() {
  const food = "fish";
  console.log(food);
  console.log(food);
}
mean();
console.log(food);

//6
const genre = "disco";
console.log(genre);
function rewind() {
  let genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
rewind();
console.log(genre);

//7
const dojo = "san jose";
console.log(dojo);
function learn() {
  let dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
learn();
console.log(dojo);

//8
function makeDojo(name, students){
  let dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));