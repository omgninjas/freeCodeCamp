function steamrollArray(arr) {
  // I'm a steamroller, baby
	const flatArr = [],
	stack = [...arr];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      flatArr.push(next);
    }
  }
flatArr.reverse();
return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
