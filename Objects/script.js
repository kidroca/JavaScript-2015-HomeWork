var k,
	problemRange,
	people = [],
	peopleAsHTML = '';

/* Used in: Global page behavior */
function stopDefaultAction(evt) {
	evt.preventDefault();
}

/* Prevents default refresh page bahavior when clicking on a submit button */
for (k = 0, problemRange = 6; k < problemRange; k += 1) {
	document.getElementsByName('submit')[k].addEventListener('click', stopDefaultAction, false);
}

/* Problem 1 */
function solveProblem1() {

	var lin,
		i,
		linesCount,
		lineLength,
		input1,
		input2,
		trianglePossible = '',
		output = '',
		lines = [],
		displayResult = document.getElementById('ResultP1');

	console.clear();

	console.log('Problem 1 \n');

	function Point(x, y) {

		this.x = x;
		this.y = y; //point constructor
	}

	function Line(p1, p2) {

		this.p1 = p1;
		this.p2 = p2; //line constructor
	}

	function inputToLine(input1, input2) {

		var p1 = {},
			p2 = {},
			l1 = {};

		input1 = input1.split(',');
		input2 = input2.split(',');

		if (input1.length != 2 || input2.length != 2) {
			return 'Invalid entry length';
		}

		p1 = new Point(+input1[0], +input1[1]);
		p2 = new Point(+input2[0], +input2[1]);

		l1 = new Line(p1, p2);

		return l1;
	}

	function checkLineLength(line) {

		var x1 = line.p1.x,
			x2 = line.p2.x,
			y1 = line.p1.y,
			y2 = line.p2.y,
			result;

		result = Math.pow(x2 - x1, 2);
		result += Math.pow(y2 - y1, 2);
		
		return Math.sqrt(result);
	}

	function checkForTriangle(l1,l2,l3) {

		if (l1 + l2 > l3) {

			if (l1 + l3 > l2) {

				if (l2 + l3 > l1) {
					return 'These line segments could form a triangle';
				}
			}
		}

		return 'These line segments can\'t form a triangle';
	}
	
	 linesCount = 3;	

	for (lin = 0, i = 0; lin < linesCount; lin += 1, i += 2) {

		input1 = document.getElementsByName('pointXY')[i].value;
		input2 = document.getElementsByName('pointXY')[i + 1].value;
		lines[lin] = inputToLine(input1, input2);
	}


	for (lin = 0 ; lin < linesCount; lin += 1) {

		lineLength = checkLineLength(lines[lin]);
		console.log('Line %s: P1(%s,%s) , P2(%s,%s). Length: %s', lin + 1, lines[lin].p1.x, lines[lin].p1.y, lines[lin].p2.x, lines[lin].p2.y, lineLength.toFixed(2));
		output += '<br>Line' + (lin + 1) + ': P1(' + lines[lin].p1.x + ',' + lines[lin].p1.y + ') , P2(' + lines[lin].p2.x + ',' + lines[lin].p2.y + '). Length: <strong>' + lineLength.toFixed(2) + '</strong><br>';
	}

	trianglePossible = checkForTriangle(checkLineLength(lines[0]), checkLineLength(lines[1]), checkLineLength(lines[2]));

	console.log(trianglePossible);

	output += '<br><br><em>' + trianglePossible + '</em>';

	displayResult.innerHTML = output;
}

/* Problem 2 */
function solveProblem2() {

	var output,
		inputArray = [],
		inputA = document.getElementById('inputP2a').value,
		inputB = document.getElementById('inputP2b').value,
		isChecked = document.getElementById('inputP2c').checked,
		displayResult = document.getElementById('ResultP2');

	if (!Array.prototype.remove) {
		Array.prototype.remove = function(value) {

			var i,
				len,
				result = [];
				
			for (i = 0, len = this.length; i < len; i += 1) {
				
				if (this[i] === value) {
					continue;
				}

				result.push(this[i]);
			}

			return result;
		};
	}

	console.clear();
	console.log('Problem 2');

	inputArray = customIntArray(inputA);

	if(!isChecked) {
		inputB = +inputB;
	}

	console.log('Array: %o',inputArray);
	output = '<br>Array: <em>' + inputArray + '</em><br><br>';

	inputArray = inputArray.remove(inputB);

	console.log('Result: %o',inputArray);
	output += 'Result: <em>' + inputArray + '</em>';

	displayResult.innerHTML = output;
}

/* Problem 3 */
function solveProblem3() {

	var i,
		j,
		output = '',
		person = {},
		personCopy = {},
		car = {},
		isChecked = document.getElementById('inputP3c').checked,
		displayResult = document.getElementById('ResultP3');

	console.clear();
	console.log('Problem 3 \n Deep copy? : %s', isChecked);

	function deepCopyObj(obj) {

		var result = JSON.stringify(obj);

		return JSON.parse(result);
	}

	car = {
		make: 'BMW',
		model: '525',
		year: '1993',
		displacement: '2500cc'
	};

	person = {
		firstName: 'Zahari',
		lastName: 'Baharov',
		job: 'Actor',
		wish: 'BMW'
	};

	if (isChecked) {
		personCopy = deepCopyObj(person);
	} else {
		personCopy = person;
	}

	/* Formating of the result bellow, very hard to follow */
	displayResult.innerHTML = '';

	output = '<h4> Person: </h4><hr>';
	console.log('\nPerson: ');
	for(i in person) {
		console.log('%s : %o', i, person[i]);
		output +='<p>' + i + ' : <em>' + person[i] + '</em></p>';
	}

	output += '<hr><h4>PersonCopy:</h4><hr>';
	console.log('\nPersonCopy:');
	for(i in personCopy) {
		console.log('%s : %o', i, personCopy[i]);
		output += '<p>' + i + ' : <em>' + personCopy[i] + '</em></p>';
	}

	output += '<hr><br><p><em>PersonCopy</em> gets a <strong>car</strong></p>';
	console.log('\nPersonCopy gets a car');
	delete personCopy.wish;
	personCopy.car = car;

	output += '<h4>Results:</h4><h4>Person:</h4><hr>';
	console.log('\n\nResults: \n-------------------------------\nPerson: ');
	for(i in person) {

		if (typeof(person[i]) === 'object') {

			console.log('%s:',i);
			output += '<p><strong>' + i + '</strong> :<ul>';

			for (j in person[i]) {
				console.log('	%s : %o', j, person[i][j]);
				output +='<li>' + j + ' : <em>' + person[i][j] + '</em></li>';
			}
			output += '</ul></p>';
			continue;
		}
		console.log('%s : %o', i, person[i]);
		output += '<p>' + i + ' : <em>' + person[i] + '</em></p>';
	}

	output += '<hr><h4>PersonCopy:</h4><hr>';
	console.log('\nPersonCopy:');
	for(i in personCopy) {

		if (typeof(personCopy[i]) === 'object') {

			console.log('%s:',i);
			output += '<p><strong>' + i + '</strong> :<ul>';

			for (j in personCopy[i]) {
				console.log('	%s : %o', j, personCopy[i][j]);
				output +='<li>' + j + ' : <em>' + personCopy[i][j] + '</em></li>';
			}
			output += '</ul></p>';
			continue;
		}
		console.log('%s : %o', i, personCopy[i]);
		output += '<p>' + i + ' : <em>' + personCopy[i] + '</em></p>';
	}

	displayResult.innerHTML = output + '<hr>';
}

/* Problem 4 */
function solveProblem4() {

	var output = '',
		obj = window,
		hasProp = false,
		inputA = document.getElementById('inputP4').value,
		displayResult = document.getElementById('ResultP4');

	console.clear();
	console.log('Problem 4');

	function hasProperty(prop, obj){
		if (prop in obj) {
			return true;
		}
		return false;
	}

	hasProp = hasProperty(inputA, obj);

	console.log('%o \nwindow has property %o : %s', obj, inputA, hasProp);
	output += '<p>var hasProp = hasProperty(' + inputA + ', obj)</p> <p>hasProp: <em>' + hasProp + '</em>';
	displayResult.innerHTML = '<p>var obj = <em>window</em></p> ' + output;
}

/* Problem 5 */
function solveProblem5() {

	var output = '',
		ind,
		prop,
		displayResult = document.getElementById('ResultP5');

	console.clear();
	console.log('Problem 5 \nThe youngest person is:');

	ind = indexOfYoungest(people);

	output = '<h4>' + 'The winner is: </h4><hr>';

	for(prop in people[ind]) {
		console.log('%s: %o', prop, people[ind][prop]);
		output += '<p>' + prop + ': <em>' + people[ind][prop] + '</em></p>';
	}

	output += '<hr>' + peopleAsHTML;

	displayResult.innerHTML = output;

	function indexOfYoungest(list) {
		var i,
			result,
			young = Infinity,
			len = list.length;

		for (i = 0; i < len; i += 1) {
			if (young > list[i].age) {
				young = list[i].age;
				result = i; 
			}
		}

		return result;
	}
}

/* Problem 6 */
function solveProblem6() {

	var output = '',
		groupedBy = [],
		input = document.getElementById('inputP6').value,
		displayResult = document.getElementById('ResultP6');

	console.clear();
	console.log('Problem 6');

	groupedBy = groupPeopleBy(input , people);
	console.log('Grouped by: %s \n%o', input, groupedBy);
	output = printResult(groupedBy);

	displayResult.innerHTML = output;


	function groupPeopleBy(key, peopleArr) {

		var group = [],
			i,
			propName,
			len = peopleArr.length;

		for (i = 0; i < len; i += 1) {

			propName = peopleArr[i][key];

			if (!group.hasOwnProperty(propName)) {
				group[propName] = [];
			}

			group[propName].push(peopleArr[i]);
		}

		return group;
	}

	function printResult(groupedBy){

		var i,
			j,
			len,
			prop,
			output = '';

		for (i in groupedBy) {

			console.log('%s: ', i);
			output += '<h3>' + i + ' </h3>';

			for(j = 0, len = groupedBy[i].length; j < len; j += 1) {

				console.log('	No: %i ',j + 1);
				output += '<p><strong>No: ' + (j + 1) + '</strong></p><ul>'; 

				for(prop in groupedBy[i][j]) {

					console.log('		%s : %o', prop, groupedBy[i][j][prop]);
					output += '<li>' + prop + ' : <em>' + groupedBy[i][j][prop] + '</em></li>';
				}

				console.log();
				output += '</ul><br>';
			}

			output += '<hr>';
		}

		return output;
	}
}
/* Used in: Problem 2 */
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
		//arr = arr.map(Number); //convert string array to int
		arr = arr.map(parseNumbers); // parses only numbers
	}

	return arr;

	function parseNumbers(value) {
		if(isNaN(+value)) {
			return value;
		} else {
			return +value;
		}
	}
}

/* Used in Problem 5 and 6 */
people = [
		{ firstname: 'Vesko', lastname: 'Ludia', age: randomInt() } , 
		{ firstname: 'Lily', lastname: 'Rockabilly', age: randomInt() } , 
		{ firstname: 'Ceco', lastname: 'Elvisa', age: randomInt() } , 
		{ firstname: 'Doncho', lastname: 'Digidona', age: randomInt() } , 
		{ firstname: 'Lidia', lastname: 'Capone', age: randomInt() } ,
		{ firstname: 'Charles', lastname: 'Hombre', age: randomInt() } ,
		{ firstname: 'Batman', lastname: 'Batmanov', age: randomInt() } , 
		{ firstname: 'Nedyalko', lastname: 'Nedodyalkov', age: randomInt() } ,
		{ firstname: 'Preslava', lastname: 'Koleva', age: randomInt() } ,
		{ firstname: 'Lily', lastname: 'Ivanova', age: randomInt() } ,
		{ firstname: 'Batman', lastname: 'Ot Yambol', age: randomInt() } 
	];

peopleAsHTML = problemContent(people);
document.getElementById('ResultP5').innerHTML = peopleAsHTML;
document.getElementById('ResultP6').innerHTML = peopleAsHTML;


function problemContent(people){

	var i,
		obj,
		len = people.length,
		content = '';

	for (i = 0; i < len; i += 1) {

		content += '<h4>' + (i + 1) + '</h4>';

		for(obj in people[i]) {
			content += '<p>' + obj + ': <em>' + people[i][obj] + '</em></p>';
		}
	}

	return content;
}

function randomInt() {

		var max = 1001,
			min = 10;

		return Math.random() * (max - min) + min | 0; 
}	
