function onesDigit(n) {
  // your code here
	let N = n.toString()
	return parseInt(N[N.length-1])
	
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
