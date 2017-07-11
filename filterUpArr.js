//Remove a duplicate from array

var myArray = ["Sam", "Dean", "Castiel", "Sam"];
var result = myArray.filter(function (value, index, array) {return array.indexOf(value) === index;)

//or

function delDupe(value, index, array) {
  return array.indexOf(value) === index;
  }
  
var result = myArray.filter(delDupe)