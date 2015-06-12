
/*----------------------------------------------------------- Problem 1 --------------------------------------------------------------*/	
	

/* integers declaration */
var dec = 123,
	hex = 0x7b, // calling hex show the decimal value
	oct = 0173; // calling oct show the decimal value

/* float declaration */
var flo = 7.2879,
	expo = 10.5e2, // 10.5 * 10^2
	negativeExpo = 5e-3; // 5 * 10^-3

/*bool declaration*/
var optimist = true,
	pessimist = false;

/*string declaration*/
var word = 'sample',
	concat = word + '-' + 'abc',
	twoWords = 'One Two',
	twoLines = 'first line \n secnod line';

/* object declaration (property : value) */
var simpleObject = {}; // empty object
var someObject = {
	FirstName: 'Chef',
	LastName: 'Manchev',
	TicketId: 15
};

/*array declaration*/
var myArray = []; // empty array
var animals = ['monkey', 'donkey', 'mango', 'human'];
var withEmptyElement = ['monkey', , 'donkey']; // if you type two commas that index will be empty;

/* special cases */
var empty = null,
	notDefined = undefined;

/*----------------------------------------------------------- Problem 2 --------------------------------------------------------------*/

var quotedText1 = 'He said: "Winter is coming!"';
var quotedText2 = 'My favorite quote from that movie is \'Hasta la vista baby!\''


/*----------------------------------------------------------- Problem 3 --------------------------------------------------------------*/

var testTypeArray = [
dec , hex , oct , flo , expo , negativeExpo , optimist , pessimist , word ,
 concat , twoWords , twoLines , simpleObject , someObject , myArray , 
 animals , withEmptyElement , empty , notDefined , quotedText1 , quotedText2
 ];

for (var i = 0 ; i < testTypeArray.length; i += 1) {
	console.log( testTypeArray[i] + ' is ' +
		typeof(testTypeArray[i]));
};

/*----------------------------------------------------------- Problem 4 --------------------------------------------------------------*/

/*These were covered in the above exercises but still*/

console.log(typeof(empty)); // object
console.log(typeof(notDefined)); // undefined
var pesho; // undefined
console.log(typeof(pesho));