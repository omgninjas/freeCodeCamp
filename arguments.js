function addTogether() {
	const args = [].slice.call(arguments);
	let params = args.length;
	let valid = args.every(function(arg){
		return typeof arg === 'number';
	});
	if(!valid){
		return undefined;
	}
	
	if(params === 2) {
		return args[0] + args[1];
	} else {
		var num1 = args[0];
		var sumThisAnd = function(num2) {
			return addTogether(num1, num2);
		};
		return sumThisAnd;
	}
}

addTogether(2)(3);