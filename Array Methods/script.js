var band = peopleArray('yes');
/* Problem 1. Make person

Write a function for creating persons.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten person with different names, ages and genders  */
function solveProblem1(){

	console.clear();
	console.log('%cProblem 1. Make person','color: red; font-style: italic');
	iterateResult(band);
}

/* -------------------------------------------------------------------------------------------------- */

/* Problem 2. People of age

Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while) */
function solveProblem2() {

	var result = band.some(notOfAge);

	console.clear();
	console.log('%cProblem 2. People of age','color: red; font-style: italic');
	console.log('The array contains only people of age? : %s', !result);

	return band;
}
/* -------------------------------------------------------------------------------------------------- */

/* Problem 3. Underage people

Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while) */
function solveProblem3() {

	var result = band.filter(notOfAge);

	console.clear();
	console.log('%cProblem 3. Underage people','color: red; font-style: italic');
	console.log('Underaged People: ');

	iterateResult(result);
}
/* -------------------------------------------------------------------------------------------------- */

/* Problem 4. Average age of females

Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while) */
function solveProblem4() {
	var females = [],
		count,
		sumOfAge = 0;

	console.clear();
	console.log('%cProblem 4. Average age of females','color: red; font-style: italic');

	females = band.filter(function(person) {
		return (person.gender === 'f');
	});

	iterateResult(females);

	females.forEach(function(person){
		sumOfAge += person.age;
	});

	count = females.length;

	console.log('Average age of females is %o', sumOfAge/count);
}
/* -------------------------------------------------------------------------------------------------- */

/* Problem 5. Youngest person

Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find */
function solveProblem5() {

	/* Polyfill */
	if (!Array.prototype.findIndex) {
	  Array.prototype.findIndex = function(predicate) {
	    if (this == null) {
	      throw new TypeError('Array.prototype.findIndex called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;

	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return i;
	      }
	    }
	    return -1;
	  };
	}
	/*-------------------------------------------------------------------------------------*/

	var indexOfYoung,
		young = Infinity;

	console.clear();
	console.log('%cProblem 5. Youngest person','color: red; font-style: italic');

	function findYoungGuy(person) {
		if(person.gender === 'm') {

			if (young > person.age) {
				young = person.age;
			}
		}
	}

	band.forEach(findYoungGuy);

	console.log('Youngest Man is %i years old',young);

	indexOfYoung = band.findIndex(function(person){
		if (person.gender === 'm') {

			return (person.age === young);
		}

		return false;
	});

	console.log('%s %s', band[indexOfYoung].firstname, band[indexOfYoung].lastname);
}
/* -------------------------------------------------------------------------------------------------- */

/* Problem 6. Group people

Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while) */
function solveProblem6() {

 	var guestbook,
		letter;

	console.clear();
	console.log('%cProblem 6. Group people','color: red; font-style: italic');

	guestbook = band.reduce(function(group, person){

		letter = person.firstname[0];

		if(!group.hasOwnProperty(letter)) {
			group[letter] = [];
		}
		group[letter].push(person);

		return group;

	}, {});

	console.table(guestbook);
 }

/* Used in problems 2 & 3 */
function notOfAge(person){
	return person.age < 18;
}

function iterateResult(arr){

		var i = 0,
			len = arr.length,
			prop;

		for(; i < len; i += 1){

			console.log('\nPerson: %i \n---------------------------------', i + 1);

			for(prop in arr[i]){

				console.log('%s : %o', prop, arr[i][prop]);
			}

			console.log('---------------------------------');
		}
}

function peopleArray(mute){

	var blakes10 = [],
		ganka,
		bonka,
		jivka,
		mitka,
		mitko,
		genadi,
		sapun,
		dj,
		batman,
		kubrat;

	function Person(fName, lName, age, gender) {

			this.firstname = fName;
			this.lastname = lName;
			this.age = age;
			this.gender = gender;
	}	

	function randomGeneder() {
		if(Math.random() > 0.49) {
			return 'm';
		} else {
			return 'f';
		}
	}

	function randomAge() {
		var max = 1001,
			min = 5,
			chanceForMinor = 50;

		if (Math.random() * 101 < chanceForMinor) {
			max = 18;
		} else {
			min = 18;
		}

		return (Math.random() * (max - min) + min) | 0;	
	}

	ganka = new Person('Ganka', 'Karaivanova' , randomAge() , randomGeneder());
	bonka = new Person('Bonka', 'Badjakova' , randomAge() , randomGeneder());
	jivka = new Person('Jivka', 'Ot Asenovgrad' , randomAge() , randomGeneder());
	mitka = new Person('Mitka', 'Dobrudjanskata' , randomAge() , randomGeneder());
	mitko = new Person('Mitko', 'Ludia' , randomAge() , randomGeneder());
	genadi = new Person('Genadi', 'Gochev' , randomAge() , randomGeneder());
	sapun = new Person('Ilian', 'Kitaetza' , randomAge() , randomGeneder());
	dj = new Person('Delyan', 'Botzev' , randomAge() , randomGeneder());
	batman = new Person('Batman', 'Batmanov (Ot Yambol)' , randomAge() , randomGeneder());
	kubrat = new Person('Kubrat', 'Pulev' , randomAge() , randomGeneder());

	blakes10 = [
		ganka , 
		bonka , 
		jivka ,
		mitka ,
		mitko ,
		genadi ,
		sapun ,
		dj ,
		batman ,
		kubrat
	];

	if(!mute) {
		iterateResult(blakes10);
	}

	return blakes10;
}
