//Make a function that looks through an array (first argument) and returns an array of all objects that have equivalent property values (second argument).

function where(collection, source) {
  var arr = [];
  
  // What's in a name?
 for(var key in collection){
    var prop = Object.keys(source);
    var col= collection[key];
    if (col.hasOwnProperty(prop) && col[prop] === source[prop]) {
      arr.push(col);
    } 
    
  }
  return arr;
}

/*Also saw this version floating around the web
function where(collection, source) {
  return collection filter(fuunction(item)) {
    return item.last === source.last;
  });
  }
*/ 
