/*
Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.


*/
/*
function truthCheck(collection, pre) {
  // Is everyone being true?
	 for(let i = 0; i < collection.length; i++){
			 if (collection[i][pre]){
				return true;
	    } else {
				return false;
		}
  //return pre;
}
}*/
"use srict";

function truthCheck(collection, pre) {
    // Is everyone being true?
    const stack = [];
    let result;
    for (let i = 0; i < collection.length; i++) {
        collection[i].hasOwnProperty(pre) && collection[i][pre] ? stack.push(true) : stack.push(false);
    }

    function logTruthiness(val) {
        return val ? true : false;
    }
    //logTruthiness(false);

    return stack.every(logTruthiness);

}
truthCheck([{
    "single": "double"
}, {
    "single": undefined
}], "single");
