type expnums = -1 | 0 | 1;

function exp(nOne: number, nTwo: number): expnums {
	return nOne > nTwo ? 1 : nOne < nTwo ? -1 : 0;
}
console.log(exp(1, 1));
