// write a js function that returns all the properties names of an Object
let person = {
    name: "Sebastian Uribe",
    age: 30,
    profession: "software developer",
};

let x = 30;

function getPropertyNames(person) {
  for (const key in person) {
    console.log(key);
  }
}


