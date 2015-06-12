/* Problem 1 */
function numbersToN() {
	var n = document.getElementById('inputP1').value,
		result = '',
		i = 0;

	console.clear();
	document.getElementById('ResultP1').innerHTML = '';

	if (n > 0) {
		for (i = 1; i <= n; i += 1) {
			result += i + ', ';
		}
	} else if (n <= 0) {
		for (i = 1; n <= i; i -= 1) {
			result += i + ', ';
		}
	}

	console.log('Problem 1: \n %s', result);
	document.getElementById('ResultP1').innerHTML = result;
}

/* Problem 2 */
function notDivisible() {
	var n = document.getElementById('inputP2').value,
		result = '',
		i = 0;

	console.clear();
	document.getElementById('ResultP2').innerHTML = '';

	if (n > 0) {
		for (i = 1; i <= n; i += 1) {
			if (!(i % 7 === 0 && i % 3 === 0)) { // Or maybe !(i % 21 === 0) 
				result += i + ', ';
			}
		}
	} else if (n <= 0) {
		for (var i = 1; n <= i; i -= 1) {
			if (!(i % 7 === 0 && i % 3 === 0)) {
				result += i + ', ';
			}	
		}
	}

	console.log('Problem 2: \n %s', result);
	document.getElementById('ResultP2').innerHTML = result;
}

/* Problem 3 */
function minMaxNumber() {
	var n = document.getElementById('inputP3').value,
		arr = n.split(' '), // Splits a string to pieces at the specified character in the brackets e.g. ',' ' '.
		length = arr.length,
		min = Number.MAX_SAFE_INTEGER,
		max = Number.MIN_SAFE_INTEGER,
		i = 0;

		console.clear();
		console.log('Problem 3: \n' + arr +'\n');
		document.getElementById('ResultP3').innerHTML = '';

		for (i = 0; i < length; i++) {
			if (min > +arr[i]) {
				min = +arr[i];
			}
			if (max < +arr[i]) {
				max = +arr[i];
			}
		}

		console.log('Min = %s , Max = %s', min, max);
		document.getElementById('ResultP3').innerHTML = 'Min = ' + min + '<br>Max = ' + max;
}

/* Problem 4 */
function lexiMinMax() {
	//var myCar = new Car('BMW' , '525' , '1993'), // hidden bonus level Alt + F4
	var result = '';

	console.clear();	
	console.log('Problem 4.')
	document.getElementById('ResultP4').innerHTML = '';
	//console.log(myCar);

	result = propertyIterator(document, 'document');
	document.getElementById('ResultP4').innerHTML = result;

	result = propertyIterator(window, 'window');
	document.getElementById('ResultP4').innerHTML += '<br><br>' + result;

	result = propertyIterator(navigator, 'navigator');
	document.getElementById('ResultP4').innerHTML += '<br><br>' + result;
}

function propertyIterator(obj, objName) {
	var prop,
		min = 'z',
		max = '',
		result = '';

	for (prop in obj) {
		if (prop < min) {
			min = prop;
		}
		if (prop > max) {
			max = prop;
		}
	}

	console.log('%s \n smallest: "%s" \n largest: "%s"', objName, min, max);
	result = resultBuilder(objName, min, max);
	return result;
}

function resultBuilder(objName, min, max) {
	var result = 'Object - ' + objName + '<br>smallest property: "' + min + '"<br>largest property: "' + max + '"';
	return result;
}

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

function stopDefaultAction(evt) {
	evt.preventDefault();
}

/*Prevents default refresh page bahavior of submit button*/
var i,
	range = 4;
for(i = 0; i < range; i += 1) {
	document.getElementsByName('submit')[i].addEventListener('click' , stopDefaultAction, false);
}

