var loremIpsum = document.getElementById('ResultP3').innerHTML;

/* Problem 1 */
function solveProblem1() {

	var input = +document.getElementById('inputP1').value,
		displayResult = document.getElementById('ResultP1'),
		output = lastDigit(input); 
	
	if(output === -1) output = 'error';

	console.clear(); // Clear old messages when starting this function
	console.log('Problem 1: \ninteger = %i \nResult: %s', input, output);
	displayResult.innerHTML = 'Integer : <em>' + input + '</em> <br><br> Result : <em>' + output + '</em>';

	function lastDigit(integerValue) {

		var result;
			integerValue = Math.abs(integerValue % 10);

		switch(integerValue) {
			case 0: result = 'zero'; break;
			case 1: result = 'one'; break;
			case 2: result = 'two'; break;
			case 3: result = 'three'; break;
			case 4: result = 'four'; break;
			case 5: result = 'five'; break;
			case 6: result = 'six'; break;
			case 7: result = 'seven'; break;
			case 8: result = 'eight'; break;
			case 9: result = 'nine'; break;
			default: result = -1;
		}

		return result;
	}
}

/* Problem 2 */
function solveProblem2() {
	var input = +document.getElementById('inputP2').value,
		displayResult = document.getElementById('ResultP2'),
		output = reverseNumber(input);
		
	console.clear();

	console.log('Problem 2: \nNumber = %f \nResult: %s', input, output);
	displayResult.innerHTML = 'Number : <em>' + input + '</em> <br><br> Result : <em>' + output + '</em>' ;

	function reverseNumber(n) {

		if(isNaN(n)) {
			return 'NaN';
		}

		var result = '',
			str = '' + n,
			i = str.length - 1,
			sign = '',
			end = 0;

		if(n < 0) { 
			sign = '-';
			end = 1;
		}

		result += sign;

		for(i ; i >= end; i -= 1) {
			result += str.substr(i, 1);
		}

		return result;
		}
}

/* Problem 3 */
function solveProblem3() {
	
	var output,
		matches = [],
		count = 0,
		plural = 'time', 
		input = document.getElementById('inputP3').value,
		displayResult = document.getElementById('ResultP3'),
		checkbox = document.getElementById('inputP3c').checked;
	
		console.clear();
		displayResult.innerHTML = loremIpsum; // loremIpsum is declared outside this function

		if(!input) {
			console.log('Error (Text field empty?)');
			displayResult.innerHTML += '<br><br> <em>Error (Text field empty?)</em>';
			return;
		}

		matches = findInText(input, loremIpsum, checkbox);
		//count = findInTextAlternative(input, loremIpsum); // Alternative solution without RegEx
		output = highlightText(input, loremIpsum, checkbox);

		if(matches) { // coment out if trying the alternative solution
		 	count = matches.length;
		}

		if(count !== 1) {
			plural = 'times';
		}

		console.log('Problem 3: \n"%s" appears %i %s in the text \ncase-sensitive: %s', input, count, plural, checkbox);

		displayResult.innerHTML = output  + '<br><br><em>' + '"' + input + '"' + '</em> appears <em>' + count + ' ' + plural + '</em><br> case-sensitive: ' + '<em>' + checkbox + '</em>';

		function findInText(word, text, option) {

			var re,
				result;

			if(option) {					 // Overloaded with 3 parameters
				re = new RegExp(word, 'g');
			} else { 						 // Default overload with 2 parameters
				re = new RegExp(word, 'gi');
			}

			result = text.match(re);

			return result;

		}

		function findInTextAlternative(word, text) { // Alternative solution without RegEx , (only case seinsitive)

			var j,
				i = 0,
				counter = 0,
				isMaching = false,
				textLen = text.length,
				wordLen = word.length;

			for (i ; i < textLen; i += 1) {
				
				if (text[i] === word[0]) {
					isMaching = true;

					for (j = 0; j < wordLen ; j += 1, i += 1) {

						if (text[i] != word[j]) {
							isMaching = false;
							break;
						}	
					}

				if (isMaching) {
					counter += 1;
				}
			}	
		}

			return counter;
		}

		function highlightText(word, text, option) {

			var re,
				result;

				if(option) { 								// Overload with 3rd parameter
					re = new RegExp('(' + word + ')', 'g');
				} else {									// Default overload with 2 parameters
					re = new RegExp('(' + word + ')', 'gi'); // The $1 below doesn't work if word is not in brackets '(' ')' 
				}

			result = text.replace(re , '<strong>$1</strong>'); // This way the word will be surronunded with <strong> tag without changing the actual word (e.g. if case-unsensitive) 

			return result;
			
		}
}

/* Problem 4 */
function solveProblem4() {

	var plural = 'div',
		output = countDivs(document),
		displayResult = document.getElementById('ResultP4');

	if (output !== 1) {
		plural = ' divs ';
	}

	console.clear();
	console.log('Problem 4: \n%i %s counted', output, plural);
	displayResult.innerHTML = '<em>' + output + '</em>' + plural + 'counted';


	function countDivs(obj) {

		return obj.getElementsByTagName('div').length;
	}
}

/* Problem 5 */
function solveProblem5() {

	var output,
		myArray = [],
		inputA = document.getElementById('inputP5a').value,
		inputB = document.getElementById('inputP5b').value,
		displayResult = document.getElementById('ResultP5');

	console.clear();
	console.log('Problem 5');
	displayResult.innerHTML = '';

	myArray = customIntArray(inputA); // Empty inputA returns random generated array (used in test function)

	/* Actual test function is this whole condtitional statement */
	if (inputB === '') { 
		inputB = pickNumber(myArray);
		console.log('Test function created an int array with random length, full of numbers between 0 and 10.A random index was picked to test the program, you can visually confirm if the result is correct.');
		displayResult.innerHTML = 'Test function created an int array with random length full of numbers between <em>0</em> and <em>10</em>.A random index was picked to test the program, you can visually confirm if the result is correct.<br><br>';
	} else {
		inputB = +inputB;
	}

	console.log('Array: %o', myArray.join(', '));
	output = instancesInArray(inputB, myArray);

	displayResult.innerHTML += output;

	function instancesInArray(n, arr) {

		var result,
			i = 0,
			len = arr.length,
			counter = 0,
			copyArray = arr.slice(0);

		for (i ; i < len; i += 1) {
			if (arr[i] === n) {
				counter += 1;
				copyArray[i] = '<em>' + arr[i] + '</em>';
			}
		}

		console.log('Result: %s appears %i %s', n, counter, (counter != 1 ? 'times' : 'time'));
		result = 'Array: <br>' + copyArray.join(', ') + '<br><br> Result: <em>' + n + '</em> appears ' + counter + (counter != 1 ? ' times' : ' time');
		return result;
	}

	function pickNumber(arr) {
		var n = Math.random() * arr.length | 0;
		return arr[n];
	}
}

/* Problem 6 */
function solveProblem6() {

	var result,
		inputArray = [],
		isBigger = '',
		inputA = document.getElementById('inputP6a').value,
		inputB = +document.getElementById('inputP6b').value,
		displayResult = document.getElementById('ResultP6');

	console.clear();

	inputArray = customIntArray(inputA);
	result = checkNeighborCells(inputB, inputArray);

	if (result > 0) {
		isBigger = 'Bigger than neighbors';
	} else if (!result) {
		isBigger = 'Not bigger by both neighbors';
	} else {
		isBigger = 'Cell is lonely it doesn\'t have more than one neighbors, or maybe none at all!';
	}

	console.log('Problem 6 \nArray: %o \nIndex: %i \nResult: %s', inputArray, inputB, isBigger);

	if (result != -1) {
		inputArray[inputB] = '<em>' + inputArray[inputB] + '</em>';
	}
	displayResult.innerHTML = 'Array: <br>' + inputArray + '<br><br>Index: <em>' + inputB + '</em> <br><br>Result: ' + isBigger;
}

/* Problem 7 */
function solveProblem7() {

	var output,
		position,
		inputArray = [],
		inputA = document.getElementById('inputP7a').value,
		displayResult = document.getElementById('ResultP7');

	console.clear();

	inputArray = customIntArray(inputA);

	console.log('Problem 7 \nArray: \n%o', inputArray);

	position = firstNeighbor(inputArray);

	if(position === -1){
		output = 'Bad luck, no such element. Result: ' + position;
	} else {
		output = 'First element larger than neighbors is at position ' + position;
		inputArray[position] = '<em>' + inputArray[position] + '</em>';
	}

	console.log(output);
	displayResult.innerHTML = 'Array: <br>' + inputArray + '<br><br>' + output;

	function firstNeighbor(arr) {

		var	i,
			test,
			range = inputArray.length;

		for (i = 1; i < range - 1; i += 1) { //no need to check first and last position;

			test = checkNeighborCells(i, arr);

			if (test === 1) {
				return i;
			}
		}

		return -1;
	}
}



/* Used in: Problem 5, 6 and 7 */
function customIntArray(str) {
	var i,
		arr = [],
		minLen = 5,
		maxLen = 21,
		len = (Math.random() * (maxLen - minLen) + minLen) | 0;

	if (str === '') { // if no input generate random numbers
		for (i = 0; i < len; i += 1) {
			arr[i] = Math.random() * 11 | 0;
		}
	} else {
		arr = str.split(' ');
		arr = arr.map(Number); //convert string array to int
	}

	return arr;
}

/* Used in problem 6 and 7 */
function checkNeighborCells(pos, arr){
		var len = arr.length - 1;

			if (pos <= 0 || pos >= len) { // has neighbors?
				return -1;

			}else if (arr[pos] > arr[pos - 1] && arr[pos] > arr[pos + 1]) {
				return 1;

			} else {
				return 0;
			}	
}

/* Used in: Global page behavior */
function stopDefaultAction(evt) {
	evt.preventDefault();
}

/* Prevents default refresh page bahavior when clicking on a submit button */
var k,
	problemRange = 7;
for (k = 0; k < problemRange; k += 1) {
	document.getElementsByName('submit')[k].addEventListener('click', stopDefaultAction, false);
}
