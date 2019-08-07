/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getfullName() setFirstName(first) setLastName(last) setfullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName,
        lastName,
        fullName = firstAndLast,
        stack;

    this.setFirstName = (x) => {
        firstName = x;
        fullName = fullName.split(" ");
        fullName[0] = firstName;
        fullName = fullName.join(" ");
    }

    this.getFirstName = () => {
        stack = fullName.split(" ");
        firstName = stack[0];
        return firstName;
    }

    this.setLastName = (x) => {
        lastName = x;
        fullName = fullName.split(" ");
        fullName[1] = lastName;
        fullName = fullName.join(" ");
    }

    this.getLastName = () => {
        stack = fullName.split(" ");
        lastName = stack[1]
        return lastName;
    }
    this.setFullName = (x) => {
        fullName = x;
        stack = fullName.split(" ")
    };
    firstName = fullName[0];
    lastName = fullName[1];
    this.getFullName = () => {
        return fullName;
    };
};
var bob = new Person('Bob Ross');
//bob.getfullName();) {


Object.keys(bob);

//bob.getFirstName(); 
//should return "Bob".

//bob.getLastName(); 
//should return "Ross".

//bob.getfullName(); 
//should return "Bob Ross".

/*
bob.setFirstName("Haskell");
bob.getfullName(); 
//should return "Haskell Ross" after .*/

/*
bob.setLastName("Curry");
bob.getfullName(); 
//should return "Haskell Curry" after .*/

/*
bob.setfullName("Haskell Curry");
bob.getfullName(); 
//should return "Haskell Curry" after .*/
/*
bob.getFirstName(); 
//should return "Haskell" after bob.setfullName("Haskell Curry").*/

//bob.getLastName(); 
//should return "Curry" after bob.setfullName("Haskell Curry").*/
