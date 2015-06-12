/* Problem 1 */
function exchangeIfGreater() {
	var a = +document.getElementsByName('inputA')[0].value, // I have many instances of inputA they can be targeted by index
		b = +document.getElementsByName('inputB')[0].value,
		temp = 0;

	if (a > b) {
		temp = a;
		a = b;
		b = temp;
	}

	console.log('Problem 1. a = %f , b = %f', a, b);
	document.getElementById('resultP1').value = 'A = ' + a + ' , B = ' + b;
}

/* Problem 2 */
function showSign() {
	var a = +document.getElementsByName('inputA')[1].value, // I have many instances of inputA they can be targeted by index
		b = +document.getElementsByName('inputB')[1].value,
		c = +document.getElementsByName('inputC')[0].value,
		negativeCounter = 0,
		result = '+';

	if (a < 0) { negativeCounter++; }
	if (b < 0) { negativeCounter++; }
	if (c < 0) { negativeCounter++; }
	if (negativeCounter % 2 != 0) { result = '-'; } 
	if (a === 0 || b === 0 || c === 0) { result = '0'; }

	console.log('Problem 2. The result is %s', result);
	document.getElementById('resultP2').value = 'The result is ' + result;
}

/* Problem 3 */
function biggestOfThree() {
	var a = +document.getElementsByName('inputA')[2].value,
		b = +document.getElementsByName('inputB')[2].value,
		c = +document.getElementsByName('inputC')[1].value,
		greatest = c;

	if (a > b) {
		if (a > c) { greatest = a; }
	} else if (b > c) { greatest = b; }
		

	console.log('Problem 3. The biggest number is %f', greatest);
	document.getElementById('resultP3').value = 'The biggest number is ' + greatest;	
}

/* Problem 4 */
function sortNumbers() {
	var a = +document.getElementsByName('inputA')[3].value,
		b = +document.getElementsByName('inputB')[3].value,
		c = +document.getElementsByName('inputC')[2].value,
		max = c,
		min = c,
		mid = c;

	if (a > b) {
		if (a > c) { max = a;}
	} else if (b > c) { max = b;}

	if (a < b) {
		if (a < c) { min = a;}
	} else if (b < c) { min = b;}

	if (a > b) {
		if (a < c) { mid = a;}
	    else if (b > c) { mid = b;}
	} else if (b < c) { mid = b;}
	  else if (a > c) { mid = a;}

	console.log('Problem 4. Result: %d , %d , %d', max , mid , min);
	document.getElementById('resultP4').value = 'Result: ' + max + ' , ' + mid + ' , ' + min;
}

/* Problem 5 */
function digitAsWord() {
	var c = document.getElementsByName('inputC')[3].value,
		asWord = 'Not a single digit';

		if(isNaN(c)) {
			asWord = 'Incorrect digit';
			c = -1;
		}

	switch(+c){
		case 0: asWord = 'zero'; break;
		case 1: asWord = 'one'; break;
		case 2: asWord = 'two'; break;
		case 3: asWord = 'three'; break;
		case 4: asWord = 'four'; break;
		case 5: asWord = 'five'; break;
		case 6: asWord = 'six'; break;
		case 7: asWord = 'seven'; break;
		case 8: asWord = 'eight'; break;
		case 9: asWord = 'nine'; break;
		default: break;
	}

	console.log('Problem 5. Result: %s', asWord);
	document.getElementById('resultP5').value = 'Result: ' + asWord;
}

/* Problem 6 */
function quadraticEquation() {
	var a = +document.getElementsByName('inputA')[4].value,
		b = +document.getElementsByName('inputB')[4].value,
		c = +document.getElementsByName('inputC')[4].value,
		x1 = 0,
		x2 = 0,
		equation = a + 'x\xB2 + ' + b + 'x + ' + c + ' = 0',
		divResult = document.createElement('div'),	
		delta = b*b - 4 * a * c;

		document.getElementById('resultP6').value = equation;
		console.log('Problem 6. Discriminant = %f', delta);
	
	if (a === 0) {
		console.log('Problem 6. Wrong Input');
		divResult.innerHTML = 'A cannot be 0';
		document.getElementById('resultP6').appendChild(divResult);
	} else if (delta < 0) {
		console.log('Problem 6. Result: No real roots');
		divResult.innerHTML = 'Result: No real roots'; 
		document.getElementById('resultP6').appendChild(divResult);
	} else if (delta > 0) {
		x1 = -b + Math.sqrt(delta);
		x1 /= 2 * a;
		x2 = -b - Math.sqrt(delta);
		x2 /= 2 * a;
		console.log('Problem 6. Result: x1 = %s, x2 = %s', +x1.toFixed(5), +x2.toFixed(5)); // Sticking '+' to 'x' removes unneeded zeroes after decimal point
		divResult.innerHTML = 'x1 = ' + +x1.toFixed(5) + '<br />x2 = ' + +x2.toFixed(5);
		document.getElementById('resultP6').appendChild(divResult);
	} else if (delta === 0) {
		x1 = -b / (2 * a);
		console.log('Problem 6. Result: x1 = %s', +x1.toFixed(5));
		divResult.innerHTML = 'x1 = ' + +x1.toFixed(5) + '<br /> One real root.';
		document.getElementById('resultP6').appendChild(divResult);
	}
}

/* Problem 7 */
function biggestOfFive() {
	var a = +document.getElementsByName('inputA')[5].value,
		b = +document.getElementsByName('inputB')[5].value,
		c = +document.getElementsByName('inputC')[5].value,
		d = +document.getElementsByName('inputD')[0].value,
		e = +document.getElementsByName('inputE')[0].value,
		greatestOfABC = c,
		greatestOfDE = e,
		greatest = 0;

	if (a > b) {
		if (a > c) { greatestOfABC = a; }
	} else if (b > c) { greatestOfABC = b; }

	if (d > e) { greatestOfDE = d; }

	if (greatestOfABC > greatestOfDE) {
		greatest = greatestOfABC;
	} else {
		greatest = greatestOfDE;
	}

	console.log('Problem 7. The biggest number is %f', greatest);
	document.getElementById('resultP7').value = 'The biggest number is ' + greatest;
}

/* Problem 8 */
function numberAsWord() {
	var c = +document.getElementsByName('inputC')[6].value,
		hundreds = (c / 100) | 0,
		decades = (c / 10) | 0,
		oneNineteen = c - decades * 10,
		asWord = '';

		if (c === 0) {
			asWord = 'Zero';
			console.log('Problem 8. Result: %s', asWord);
			document.getElementById('resultP8').value = asWord;
			return;
		} else if (c > 999 || c < 0 || isNaN(c)) {
			console.log('Problem 8. Invalid Entry %s', asWord);
			asWord = 'Invalid Entry';
			document.getElementById('resultP8').value = asWord;
			return;
		}

		if (hundreds) { decades -= 10 * hundreds; }
		if (decades === 1) { oneNineteen += 10; }

	console.log('Problem 8. hundreds = %s , decades = %s , oneNineteen = %s', hundreds, decades, oneNineteen);

		switch(hundreds) {
			case 1: asWord += 'One'; break;
			case 2: asWord += 'Two'; break;
			case 3: asWord += 'Three'; break;
			case 4: asWord += 'Four'; break;
			case 5: asWord += 'Five'; break;
			case 6: asWord += 'Six'; break;
			case 7: asWord += 'Seven'; break;
			case 8: asWord += 'Eight'; break;
			case 9: asWord += 'Nine'; break;
			default: break;
		}
		if ((hundreds && decades) || (hundreds && oneNineteen)) { asWord += ' hundred and '; }
		else if (hundreds) { asWord += ' hundred '; }

		switch(decades) {
			case 2: asWord += 'Twenty'; break;
			case 3: asWord += 'Thirty'; break;
			case 4: asWord += 'Forty'; break;
			case 5: asWord += 'Fifty'; break;
			case 6: asWord += 'Sixty'; break;
			case 7: asWord += 'Seventy'; break;
			case 8: asWord += 'Eighty'; break;
			case 9: asWord += 'Ninety'; break;
			default: break;	
		}
		if ((decades > 1) && oneNineteen) { asWord += '-'; }

		switch(oneNineteen) {
			case 1: asWord += 'one'; break;
			case 2: asWord += 'two'; break;
			case 3: asWord += 'three'; break;
			case 4: asWord += 'four'; break;
			case 5: asWord += 'five'; break;
			case 6: asWord += 'six'; break;
			case 7: asWord += 'seven'; break;
			case 8: asWord += 'eight'; break;
			case 9: asWord += 'nine'; break;
			case 10: asWord += 'ten'; break;
			case 11: asWord += 'eleven'; break;
			case 12: asWord += 'twelve'; break;
			case 13: asWord += 'thirteen'; break;
			case 14: asWord += 'fourteen'; break;
			case 15: asWord += 'fifteen'; break;
			case 16: asWord += 'sixteen'; break;
			case 17: asWord += 'seventeen'; break;
			case 18: asWord += 'eighteen'; break;
			case 19: asWord += 'nineteen'; break;
			default: break;
		}

	console.log('Problem 8. Result: %s', asWord);
	document.getElementById('resultP8').value = asWord;
}