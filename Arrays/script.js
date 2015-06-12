/* Problem 1 */
function allocateArray() {
	var i,
		arr = [],
		len = 20,
		mod = 5,
		displayResult = document.getElementById('ResultP1'); 

	console.clear(); // Clear old messages when starting this function

	for (i = 0; i < len; i += 1) {
		arr[i] = i * mod;
	}

	console.log('Problem 1: \nArray: ' + arr);
	arr = arr.join(' ');
	displayResult.innerHTML = 'Array: <br>' + arr;
}

/* Problem 2 */
function lexComparison() {
	var result,
		output,
		inputA = document.getElementById('inputP2a').value,
		inputB = document.getElementById('inputP2b').value,
		displayResult = document.getElementById('ResultP2'),
		len = Math.random() * 21 + 5 | 0, // for random arrays
		stark = [],
		lanister = [];

	console.clear();

	if (inputA === '') { // if no input
		stark = randomCharArray(len); //Use a function to generate array
	} else {
		stark = inputA.split(' '); //Split the input string to array
	}
	if (inputB === '') {
		lanister = randomCharArray(len);
	} else {
		lanister = inputB.split(' ');
	}

	result = charCompare(stark, lanister, 'stark', 'lanister'); //function to iterate arrays and compare characters
	
	console.log('Problem 2. \n' + result.join('\n'));
	result = result.join('<br>');
	output = result.replace(/ > /g, '<em> > </em>');
	output = output.replace(/ = /g, '<em> = </em>');
	output = output.replace(/ < /g, '<em> < </em>');
	displayResult.innerHTML = output;
}

/* Used in: Problem 2 */
function charCompare(arr1, arr2, name1, name2) {
	var i,
		len = Math.max(arr1.length, arr2.length),
		result = [];

	for (i = 0; i < len; i += 1) {
		if (arr1[i] > arr2[i]) {
			result[i] = name1 + '[' + i + ']' + ' : \'' + arr1[i] + '\' > ' + name2 + '[' + i + ']' + ' : \'' + arr2[i] + '\'';
		} else if (arr1[i] < arr2[i]) {
			result[i] = name1 + '[' + i + ']' + ' : \'' + arr1[i] + '\' < ' + name2 + '[' + i + ']' + ' : \'' + arr2[i] + '\'';
		} else if (arr1[i] === arr2[i]) {
			result[i] = name1 + '[' + i + ']' + ' : \'' + arr1[i] + '\' = ' + name2 + '[' + i + ']' + ' : \'' + arr2[i] + '\'';
		}
	}

	return result;
}

/* Used in: Problem 2 */
function randomCharArray(length) {
	var i,
		index = 0,
		possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		range = possible.length,
		arr = [];

	for (i = 0; i < length; i += 1) {
		index = Math.random() * range | 0;
		arr[i] = possible.substr(index, 1);
	}

	return arr;
}

/* Problem 3 */
function mostRepSeq() {
	var i,
		len,
		target,
		inputArray = [],
		result = [],
		count = 1,
		maxCount = 1,
		input = document.getElementById('inputP3').value,
		displayResult= document.getElementById('ResultP3');

	console.clear();
	displayResult.innerHTML = '';

	inputArray = customIntArray(input); //returns an array based on the input
	console.log('Problem 3. \nArray: %o', inputArray.join(', '));
	displayResult.innerHTML = 'Your Array: <br><em>' + inputArray.join(', ') + '</em><br><br>';

	len = inputArray.length;
	target = inputArray[0];
	for (i = 1; i < len; i += 1) {

		if (target === inputArray[i]) {
			count += 1;
		} else {
			count = 1;
			target = inputArray[i];
		}

		if (count > maxCount) {
			maxCount = count;
			result = [target]; // resets the result to 1 element and asigns it the value of target	
		} else if (count === maxCount) {
			result.push(target); // if more than one valid results - store them here
		}
	}

	if (maxCount < 2) {
		console.log('No sequence of repeating numbers');
		displayResult.innerHTML += 'No sequence of repeating numbers';
		return;
	}

	result = resultBuilderP3(result, maxCount); // function to format the result

	console.log('Max sequences: \n%s', result.join('\n'));

	if (result.length > 1) {
		displayResult.innerHTML += 'More than one valid results: <br>'; 
	} else { displayResult.innerHTML += 'Maximal sequence: <br>'; }

	displayResult.innerHTML += '<em>' + result.join('<br>') + '</em>';
}

/*Used in: Problem 3 */
function resultBuilderP3(arr, count) {
	var i,
		j,
		target,
		len = arr.length;

	for (i = 0; i < len; i += 1) {
		target = arr[i];
		for (j = 1; j < count; j += 1) {
			target += ', ' + arr[i];
		}
		arr[i] = target;
	}

	return arr;
}

/* Problem 4 */
function maxIncrSeq() {
	var i,
		j,
		len,
		target,
		result,
		count = 0,
		maxCount = 0,
		endIndexes = [],
		inputArray = [],
		input = document.getElementById('inputP4').value,
		displayResult = document.getElementById('ResultP4');

	console.clear();
	displayResult.innerHTML = '';

	inputArray = customIntArray(input);
	console.log('Problem 4. \nYour Array: %o', inputArray.join(', '));
	displayResult.innerHTML = 'Your Array: <br><em>' + inputArray.join(', ') + '</em>';

	len = inputArray.length;
	for (i = 1; i < len; i += 1) {

		target = inputArray[i - 1];

		if (target < inputArray[i]) {
			count += 1;
		} else {
			count = 0;
		}

		if (count > maxCount) {
			maxCount = count;
			endIndexes = [i]; // reset to 1 elements + asign value of i
		} else if (count === maxCount) {
			endIndexes.push(i);
		}
	}

	if (maxCount < 1) {
		console.log('No increasing sequence');
		displayResult.innerHTML += '<br><br>No increasing sequence';
		return;
	}

	console.log('Max sequence length = %i', maxCount + 1);
	displayResult.innerHTML += '<br><br> Max sequence length = ' + (maxCount + 1) + '<br>';

	len = endIndexes.length;
	if (len > 1) {
		console.log('More than one valid results exist:');
		displayResult.innerHTML += 'More than one valid results exist:<br>';
	}
	for (i = 0; i < len; i += 1) {

		console.log('Sequence "%i":', i + 1);
		displayResult.innerHTML += 'Sequence "' + (i + 1) + '": ';
		result = [];

		for (j = endIndexes[i] - maxCount; j <= endIndexes[i]; j += 1) {
			result += inputArray[j] + ' ';
		}

		console.log(result);
		displayResult.innerHTML += '<em>' + result + '</em><br>';
	}
}

/* Problem 5 */
function useSelectionSort() {
	var inputArray = [],
		input = document.getElementById('inputP5').value,
		displayResult = document.getElementById('ResultP5');

	console.clear();
	displayResult.innerHTML = '';

	inputArray = customIntArray(input);
	console.log('Your array: %o', inputArray.join(', '));
	displayResult.innerHTML = 'Your array: <br><em>' + inputArray.join(', ') + '</em>';

	selectionSortAlg(inputArray); // See the implemented algorithm below;
	console.log('Sorted Array: %o', inputArray.join(', '));
	displayResult.innerHTML += '<br><br>Sorted Array: <br><em>' + inputArray.join(', ') + '</em>';
}

/* Used in: Problem 5 (Actual Selection Sort Algorithm) */
function selectionSortAlg(arr) {
	var i,
		j,
		current,
		swichIndex,
		len = arr.length;

	for (i = 0; i < len - 1; i += 1) {

		current = arr[i];
		swichIndex = i;

		for (j = i + 1; j < len; j += 1) {

			if (current > arr[j]) {
				current = arr[j];
				swichIndex = j;
			}
		}

		arr[swichIndex] = arr[i];
		arr[i] = current;
	}

	//No return
}

/* Problem 6 */
function mostFreqNum() {
	var i,
		j,
		len,
		myArray = [],
		result = [],
		count = 0,
		maxCount = 0,
		input = document.getElementById('inputP6').value,
		displayResult = document.getElementById('ResultP6');

	console.clear();
	displayResult.innerHTML = '';

	myArray = customIntArray(input);

	console.log('Problem 6, myArray: \n %o', myArray.join(', '));
	displayResult.innerHTML = 'Your Array: <br><em>' + myArray.join(', ') + '</em>';

	len = myArray.length;
	for (i = 0; i < len; i += 1) {
		count = 0;
		for (j = i; j < len; j += 1) {
			if (myArray[i] === myArray[j]) {
				count += 1;
			}
		}
		if (count > maxCount) {
			maxCount = count;
			result = [myArray[i]]; // resets the result to 1 element and asigns it value of myArray[i]
		} else if (count === maxCount) {
			result.push(myArray[i]); // iserts values if there are more than one valid results;
		}
	}

	if (maxCount < 2) {
		console.log('No repeating numbers');
		displayResult.innerHTML += '<br><br>' + 'No repeating numbers';
		return;
	}

	result = result.join(', ');
	console.log('Most frequent numbers: %s \nOccurrence: %i times', result, maxCount);
	displayResult.innerHTML += '<br><br>' + 'Most frequent numbers: ' + result + '<br>Occurrence: ' + maxCount + ' times';
}

/* Problem 7 */
function useBinarrySearch() {
	var result,
		compareFunction,
		inputArray = [],
		inputA = document.getElementById('inputP7a').value, // '4 8 21 3 5 10 1 6 11', '0 2 3 3 3 8 8 10'
		searchFor = +document.getElementById('inputP7b').value,
		displayResult = document.getElementById('ResultP7');

	console.clear();
	console.time('binSearchTest');
	displayResult.innerHTML = '';

	inputArray = customIntArray(inputA);
	console.log('Your Array: %o', inputArray.join(', '));

	inputArray.sort(compareFunction = function(a, b) {
		return a - b;
	});

	console.log('Sorted: %o', inputArray.join(', '));
	displayResult.innerHTML = 'Your Array(Sorted): <br><em>' + inputArray.join(', ') + '</em><br><br>';

	result = binarySearchAlg(searchFor, inputArray); //See the implemented algorithm below

	console.timeEnd('binSearchTest');
	if (result === -1) {
		console.log ('Number "%f" not found', searchFor);
		displayResult.innerHTML += 'Number "' + searchFor +  '" not found.';
		return;
	}
	console.log('Number "%f" found at index [%i]', searchFor, result);
	displayResult.innerHTML += 'Number "' + searchFor + '" found at index [' + result + ']'; 
}

/*Used in: Problem 7 */
function binarySearchAlg(n, arr) {
	var index,
		rangeBottom = 0,
		rangeTop = arr.length;

	//You can set which binary search algorith to use here: #divideAndConq for recursive or #binSearchFunction for iterative
	index = binSearchFunction(n, arr, rangeBottom, rangeTop); 
	return index;
}

/* Used in: Problem 7 (Binary Search Algorithm with recursion) */
function divideAndConq(n, arr, rangeBottom, rangeTop) {
	var currentIndex = ((rangeTop - rangeBottom) / 2 + rangeBottom) | 0;
	//console.log('Re'); // for debugging
	//console.log('Current = %i \nBottom = %i \nTop = %i', currentIndex, rangeBottom, rangeTop); //for debugging

	if (arr[currentIndex] === n) {
		return currentIndex;

	} else if (arr[currentIndex] > n) {

		rangeTop = currentIndex;

		if (rangeTop - rangeBottom <= 0) {
			return -1;
		}

	    currentIndex = divideAndConq(n, arr, rangeBottom, rangeTop);
	    return currentIndex;

	} else {
		rangeBottom = currentIndex + 1;

		if (rangeTop - rangeBottom <= 0) {
			return -1;
		}

		currentIndex = divideAndConq(n, arr, rangeBottom, rangeTop);
		return currentIndex;
	}
}

/* Used in Problem 7 Binary Search without recursion */
function binSearchFunction(n, arr, rangeBottom, rangeTop) {
	var currentIndex;
		
	while(rangeTop - rangeBottom > 0) {
		currentIndex = rangeBottom + (rangeTop - rangeBottom) / 2;
		currentIndex |= 0;
		//console.log('Go'); // for debugging;

		if (arr[currentIndex] === n) {
			return currentIndex;

		} else if (arr[currentIndex] > n) {
			rangeTop = currentIndex;

		} else {
			rangeBottom = currentIndex + 1;
		}
	}

	return -1;
}

/* Used in: Problem 3, 4, 5, 6 and 7 */
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
