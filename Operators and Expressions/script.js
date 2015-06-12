var testNumber = +prompt('Test Number for Problem 1, 2, 4, 5'),

 	figureWidth = +prompt('Problem 3. side a = '),
	figureHeight = +prompt('Problem 3. side b = '),

	x = +prompt('Problem 6 & 9. x = '),
	y = +prompt('Problem 6 & 9. y = '),

	testPrime = +prompt('Problem 7. Test if Prime [0 - 100]: '),

	trapA = +prompt('Problem 8. Trapezoid a = '),
	trapB = +prompt('Problem 8. Trapezoid b = '),
	trapH = +prompt('Problem 8. Trapezoid h = ');

console.log('Test number = ' + testNumber);
console.log('Rectangle a = %s , Rectangle b = %s', figureWidth, figureHeight);
console.log('x = %s , y = %s ', x, y);
console.log('Test for prime number = %s', testPrime);
console.log('Trapezoid a = %s, b = %s , h = %s', trapA, trapB, trapH);
console.log('\n\r');

/* --------------------------------------------------------------------------------------  */

/* Problem 1. Odd or Even 
	
	Write an expression that checks if given integer is odd or even.	*/

	var evenOrOdd = 'odd';

	if (testNumber % 2 === 0) {
		evenOrOdd = 'even';
	}
	if (testNumber === 0) {
		evenOrOdd = 'zero'
	}

	console.log('Problem 1. Is test number even? : ' + evenOrOdd);

/* --------------------------------------------------------------------------------------  */

/* Problem 2. Divisible by 7 and 5

	Write a boolean expression that checks for given integer if it can be
	divided (without remainder) by 7 and 5 in the same time. */

	var divisibleByFive = ((testNumber % 5) === 0),
		divisibleBySeven = ((testNumber % 7) === 0);

	if (divisibleByFive & divisibleBySeven) {
		console.log('Problem 2. The test number is divisble by 7 and 5 without remainder.')
	}
	else { 
		console.log('Problem 2. The test number is not divisble by both 7 and 5 without remainder.')
	};

/* --------------------------------------------------------------------------------------  */

/* Problem 3. Rectangle area
	Write an expression that calculates rectangle’s area by given width and height. */

	var rectangleArea = figureWidth * figureHeight;
	console.log('Problem 3. The rectangle area is ' + rectangleArea);

/* --------------------------------------------------------------------------------------  */

/* Problem 4. Third digit
	Write an expression that checks for given integer if its third digit (right-to-left) is 7. */

	var thirdDigit = (testNumber / 100) | 1,
		checkIfSeven = (thirdDigit % 10) === 7;
	console.log('Problem 4. Third Digit Seven? : ' + checkIfSeven);

/* --------------------------------------------------------------------------------------  */

/* Problem 5. Third bit
	Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
	The bits are counted from right to left, starting from bit #0.
	The result of the expression should be either 1 or 0. */

	var thirdBit = 8, // 8 in binary = 1000;
	 	testToBinary = testNumber.toString(2); // Just to really see the third bit 
	console.log('Problem 5. Test Number binary representation: ' + testToBinary);

	thirdBit = thirdBit & testNumber;
	
	if (thirdBit === 8) {
		thirdBit = 1;
	}

	console.log('Bit #3 is ' + thirdBit);

/* --------------------------------------------------------------------------------------  */

/* Problem 6. Point in Circle
	Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). 
	//{0,0} is the centre and 5 is the radius */
	
	var inside = (x*x + y*y <= 5*5 ); // The other way is to calculate square root of (x*x + y*y) and compare it to R

	console.log('Problem 6. x = ' + x + ' , y = ' + y + ' Is the point inside if radius is 5? ' + inside);

/* --------------------------------------------------------------------------------------  */

/* Problem 7. Is prime
	Write an expression that checks if given positive integer number n (n ≤ 100) is prime. */

	/* Since the problem focuses on numbers up to 100, let's examine the factors of 100:
	 1 * 100, 2 * 50, 4 * 25, 5 * 20, 10 * 10. The factor to test to ,for numbers up to 100, is 10
	 The prime numbers between 2 and 10 are 2, 3, 5, 7. 4,6,8 and 10 are even (multiple of 2)
	  and 9 is a multiple of 3. If a number is even it's not prime, unless it's 2 - the only even prime number
	  In conclusion the only numbers we need to test for numbers up to 100 inclusive are 2, 3, 5 and 7.  */

	  var isPrime = true;

	  if (testPrime != 2 && testPrime % 2 === 0) {
	  	isPrime = false;
	  }
	  else if (testPrime != 3 && testPrime % 3 === 0) {
	  	isPrime = false;
	  }
	  else if (testPrime != 5 && testPrime % 5 === 0) {
	  	isPrime = false;
	  }
	  else if (testPrime != 7 && testPrime % 7 === 0) {
	  	isPrime = false;
	  };

	  console.log('Problem 7. The number %i is prime: %s', testPrime, isPrime);

/* --------------------------------------------------------------------------------------  */

/* Problem 8. Trapezoid area
	Write an expression that calculates trapezoid's area by given sides a and b and height h. */

	var trapS = ((trapA + trapB) / 2) * trapH;

	console.log('Problem 8. The area is %f',trapS);

/* --------------------------------------------------------------------------------------  */

/* Problem 9. Point in Circle and outside Rectangle 
	Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
	and out of the rectangle R(top=1, left=-1, width=6, height=2). */

	var rectangleWidth = 6,
		rectangleLeft = -1,
		rectangleRight = rectangleLeft + rectangleWidth,

		rectangleHeight = 2,
		rectangleTop = 1,
		rectangleBottom = rectangleTop - rectangleHeight,

		kX = 1,
		kY = 1,
		kRad = 3,

		isInRectangle = (x >= rectangleLeft && x <= rectangleRight )
			 		&& (y >= rectangleBottom && y <= rectangleTop) ,

		distanceFromCenter = Math.pow((x - kX), 2) 
							+ Math.pow((y - kY),2) , 
		isInCircle = distanceFromCenter <= Math.pow(kRad, 2) ,

		endResult = 'No';

		if (isInCircle) {
			if (!isInRectangle) {
				endResult = 'Yes';
				};
		};

		console.log	('Problem 9. x = %f , y = %f , inside K & outside R? %s', x, y, endResult);

/* The End  */

	



