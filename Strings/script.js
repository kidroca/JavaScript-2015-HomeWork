var titleColor = 'color: green; font-style: italic',
	highlight = 'color: red; font-weight: bold',
	resultColor = 'color: blue; font-style: italic';

/* Used in Problem 4 */
String.prototype.toMixCase = function() {
	
	var re = /([a-z])/gi;

	return this.replace(re, function(match) {

		return Math.random() < 0.5 ? match.toLowerCase() : match.toUpperCase();
	});	
};

/* Problem 1 */
function solveProblem1() {

	var str = prompt('Enter a string'),
		len = str.length - 1,
		result = '';

	console.clear();
	console.log('%cProblem 1. Reverse string', titleColor);

	for (; len >= 0; len -= 1) {
		result += str[len];
	}

	console.log('String: %s \n%cResult: %s', str, resultColor, result);
}

/* Problem 2 */
function solveProblem2() {

	var str = prompt('Enter an expression with brackets'),
		len = str.length,
		i,
		leftBracketCount = 0, // (
		rightBracketCount = 0, // )
		result = '';

	console.clear();
	console.log('%cProblem 2. Correct brackets', titleColor);

	for (i = 0; i < len; i += 1) {

		if(str[i] === '(') {
			leftBracketCount++;
		} else if ((str[i] === ')') && (leftBracketCount - rightBracketCount === 0)) {
			result = 'Brackets are not put correctly'; 
			break;
		} else if (str[i] === ')') {
			rightBracketCount++;
		}
	}

	if(!result) {

		if (!leftBracketCount && !rightBracketCount) {
			result = 'No brackets used';
		} else if (leftBracketCount - rightBracketCount === 0) {
			result = 'Brackets are put correctly';
		} else {
			result = 'Brackets are not put correctly';
		}
	}

	console.log('%cResult: %s', resultColor, result);
}

/* Problem 3 */
function solveProblem3() {

	var substr = prompt('Enter a substring from the sample text'),
		text = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
		result = 0;

	console.clear();
	console.log('%cProblem 3. Sub-string in text', titleColor);

	function countInText(word, text) {

		var i,
			j,
			counter = 0,
			isMaching = false,
			textLen = text.length;
			wordLen = word.length;

		text = text.toLowerCase();

		for (i = 0; i < textLen; i += 1) {
			
			if (text[i] === word[0]) {

				isMaching = true;

				for (j = 0; j < wordLen; j += 1, i += 1) {
					
					if (text[i] != word[j]) {
						isMaching = false;
						break;
					}
				}

				if (isMaching) {

					counter++;
				}
			}	
		}

		return counter;
	}

	result = countInText(substr, text);

	console.log('%cThe substring %c%s%c appears %i times in the text', resultColor, highlight, substr, resultColor, result);
}

/* Problem 4 */
function solveProblem4() {

	var text = [ // replace with your sample if you wish
		"We <upcase>are</upcase> living in an <mixcase>yellow submarine.",
		"<lowcase>We</lowcase> don't have <upcase>anything else. inside",
		"</upcase> the submarine</mixcase> is very tight.<lowcase>So we are",
		" drinking <mixcase>all the day. We will move</mixcase> out of it ",
		"<upcase>in 5 days.</upcase></lowcase>"
		].join(''),
		low = [],
		mix = [],
		up = [],
		first,
		tags = {
			low1 : '<lowcase>',
			low2 : '</lowcase>',
			up1 : '<upcase>',
			up2 : '</upcase>',
			mix1 : '<mixcase>',
			mix2 : '</mixcase>'
		};

	console.clear();
	console.log('%cProblem 4. Parse tags', titleColor);
	console.log('Text: \n%s',text);

	low = pushTags(text, tags.low1, tags.low2); //Function is bellow
	up = pushTags(text, tags.up1, tags.up2);
	mix = pushTags(text, tags.mix1, tags.mix2);

	// console.log(low); //for debug
	// console.log(up);
	// console.log(mix);

	while(low[0] || up[0] || mix[0]) {

		//find first tag 
		first = findMin(low[0], up[0], mix[0]);

		if (first === low[0]) {
			//do convertion and forget positions of converted tags
			text = transformText(text, 'low', low[0], low[1]); //Function is bellow
			low.splice(0,2);

		} else if (first === up[0]) {

			text = transformText(text, 'up', up[0], up[1]);
			up.splice(0,2);

		} else if (first === mix[0])  {

			text = transformText(text, 'mix', mix[0], mix[1]);
			mix.splice(0,2);
		}
	}

	text = removeTags(text);

	console.log('%cParsed Text: \n%s', resultColor, text);

	function pushTags(text, tagOpen, tagClose) {
		
		var indexes = [],
			cycle = true,
			index1,
			index2;

		while(cycle) {

			index1 = text.indexOf(tagOpen, index1 + 1);
			index2 = text.indexOf(tagClose, index2 + 1);

			if (index1 != -1) {
				indexes.push(index1, index2);
			} else {
				cycle = false;
			}
		}

		if (indexes.length %2 != 0) {
			return console.log('Error uneven number of tags');
		}

		return indexes;
	}

	function findMin(a,b,c) {

		if (isNaN(a)) {
			a = Infinity;
		}
		if (isNaN(b)) {
			b = Infinity;
		}
		if (isNaN(c)) {
			c = Infinity;
		}

		return Math.min(a,b,c);
	}

	function transformText(text, option, start, end) {

		var piece1 = text.slice(0, start),
			piece2 = text.slice(start, end);
			piece3 = text.slice(end);

		if (option === 'up') {
			piece2 = piece2.toUpperCase();
		} else if (option === 'low') {
			piece2 = piece2.toLowerCase();
		} else if (option === 'mix') {
			piece2 = piece2.toMixCase();
		} else {
			return 'error option in transformText';
		}

		return piece1 + piece2 + piece3;
	}

	function removeTags(text) {

		var tag1 = /<lowcase>|<\/lowcase>/gi,
			tag2 = /<upcase>|<\/upcase>/gi,
			tag3 = /<mixcase>|<\/mixcase>/gi;

			text = text.replace(tag1, '');
			text = text.replace(tag2, '');
			text = text.replace(tag3, '');

		return text;
	}
}

/* Problem 5 */
function solveProblem5() {

	var text = [
		" We are living in an yellow submarine. We don't have ",
		"anything else. inside the submarine is very tight. So",
		" we are drinking all the day. We will move out of it in 5 days."
		].join(''),
		re = /\s/g;

	console.clear();
	console.log('%cProblem 5. nbsp', titleColor);
	console.log('Text: \n%s',text);

	text = text.replace(re, '&nbsp;');

	console.log('%cParsed Text: \n%s', resultColor, text);
}

/* Problem 6 */
function solveProblem6() {
	var text,
		i,
		len,
		articles = document.getElementsByTagName('article'),
		re = /(<([^>]+)>)|\n+|\t+/gi;

	console.clear();
	console.log('%cProblem 6. Extract text from HTML', titleColor);

	for(i = 0, len = articles.length; i < len; i += 1){
			text = articles[i].innerHTML;
			console.log('Text: \n%s',text);
			text = text.replace(re, '');
			console.log('%cParsed Text: \n%s', resultColor, text);
	}
}

/* Problem 7 */
function solveProblem7() {
	var url = prompt('Enter an url(Leave empty for default)'), 
		matches,
		result = {},
		re = /(^\S+):\/\/(.+?)(\/\S+)/i;

	console.clear();
	console.log('%cProblem 7. Parse URL', titleColor);

	if (!url) {
		url = 'http://telerikacademy.com/Courses/Courses/Details/239';
	}

	matches = re.exec(url);

	if (!matches) {
		return console.log('%cIncorect URL',resultColor);
	}

	result.protocol = matches[1];
	result.server = matches[2];
	result.resource = matches[3];

	console.log('url: %s',url);
	console.log('%cResult: ',resultColor);
	console.log(result);
}

/* Problem 8 */
function solveProblem8() {
	var input = prompt('Enter texh with <a href> tags or leave empty for default'),
		output,
		reUrl = /<a\shref="(\S+)">/gi,
		reCloseTags = /<\/a>/gi;

	console.clear();
	console.log('%cProblem 8. Replace tags', titleColor);

	if (!input) {
		input = [
			'<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course.', 
			' Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'
		].join('');
	}

	console.log('Input: \n%s',input);

	output = input.replace(reUrl, '[URL=$1]');
	output = output.replace(reCloseTags, '[/URL]');

	console.log('%cResult with replaced tags: \n%s', resultColor, output);
}

/* Problem 9 */
function solveProblem9() {
	var input = prompt('enter text with e-mail addresses or leave empty for default'),
		output,
		re = /\S+@\S+\.\w+/gi;

	console.clear();
	console.log('%cProblem 9. Extract e-mails', titleColor);

	if (!input) {
		input = [
			'На Недялко имейла е headless_0ne@google-mail.net. Дядо ти петко мина на уиндоус 10 - kolio@ficheto.eu. ',
			'Сестрата на брат ти е на този адрес kra@liMarko.es, aко има проблеми прати мейл тук batman@otYambol.com.'
		].join('');
	}

	console.log('Text: \n%s',input);

	output = input.match(re);

	console.log('%cResult: \n%o', resultColor, output);
}

/* Problem 10 */
function solveProblem10() {
	var input = prompt('Enter text with palindromes or leave empty for default'),
		palindromes = [],
		wordsInText = [];
		

	console.clear();
	console.log('%cProblem 10. Find palindromes', titleColor);

	if (!input){
		input = [
			'He drove a honda civic on a level road like a racecar, when a rotor or rotator dewed. ',
			'Elle harases Hannah ',
			'Did you buy a kayak ',
			'Don\'t call me lady I\'m a maddam ',
			'Mom gave me 5$ ',
			'Every day at noon ',
			'Otto sees Otto ',
			'Refer your best lawyer ',
			'What are your heroe\'s stats ',
			'NeverOdOrEven'
		].join('');
	}

	wordsInText = input.match(/\w+/gi);
	console.log('Text: \n%s', input);

	palindromes = wordsInText.filter(isPalindrome);

	console.log('%cPalindromes: %o', resultColor, palindromes);

	function isPalindrome(word){

		var i = 0,
			len = word.length,
			j = len - 1,
			pali = true;

		if (len < 2) {
			return false;
		}

		word = word.toLowerCase();

		len /= 2 | 0;

		for (; i < len; i += 1, j -= 1) {
			if (word[i] !== word[j]) {
				pali = false;
				break;
			}
		}

		return pali;
	}
}	

/* Problem 11 */
function solveProblem11() {
	var text,
		input = prompt('Enter text, use placeholders {0}...{30} or leave empty for default(5 placehoders)'),
		placeholders = prompt('Now enter the placeholders separated by space');
		re = /{(\d+)}/g;

	console.clear();

	if (!input){
		input = [
			'Без {0} хабя си таланта, ',
			'седя спокойно и дебна {1}. ',
			'I like да си пийвам с {2} на бара, ',
			'мисля си за {3}, ама ме боли фара. ',
			'Цял ден, пълен {4}, ',
			'пълен {4}, п-пълен {4}...'
		].join('');
	}

	if (!placeholders){
		placeholders = [
			'покемон',
			'едно',
			'две',
			'какво',
			'трамвай'
		];
	} else {
		placeholders = placeholders.split(' ');
	}
	console.log('%cProblem 11. String format', titleColor);
	console.log('Text: \n%s',input);
	console.log('Placeholders: \n%o',placeholders);

	text = input.replace(re, substituteMatch);

	console.log('%cResult text: \n%s', resultColor, text);

	function substituteMatch(match, i) {

		if(placeholders[i]) {
			return placeholders[i];
		}
		return '{ '+ i + ' not used}';
	}
}

/* Problem 12 */
function solveProblem12() {

	var template = document.getElementById('template').innerHTML,
		people = [
			{name : 'Zahari' , age : randomAge() },
			{name : 'Conka' , age : randomAge() },
			{name : 'Batman' , age : randomAge() },
			{name : 'Elvis' , age : randomAge() },
			{name : 'Grigor Dimitrov' , age : randomAge()}
		],
		peopleList = ['<ul>'];

	console.clear();
	console.log('%cProblem 12. Generate list', titleColor);
	console.log('Template: %s', template);

	people.forEach(subsTemplate);
	peopleList.push('</ul>');

	console.log('%cResult: %o', resultColor, peopleList);

	document.getElementById('list').innerHTML ='<h4>People list:</h4>' + peopleList.join('');

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

	function subsTemplate(elements){

		var li = '<li>' + template + '</li>',
			re = /-{(\S+)}-/g;

		li = li.replace(re, function(match, prop) {

			return elements[prop] || prop;	
		});

		peopleList.push(li);
	}
}



