/* String Format Function */
String.prototype.strFormat = function (options) {
	
    return this.replace(/#{(\S+)}/g, function (match, prop) {
		return options[prop] || match;
    });
};

/* String Bind Function */
String.prototype.bind = function (props) {
	
	var re = /data-bind-(.+?)="(.+?)"/g,
		content = this,
		innerHtml = '';
		
	content = content.replace(re, function(match, bind, value){
		if(bind === 'content') {
			innerHtml = props[value];
			return '';
		} else if (bind === 'href') {
			return 'href="' + props[value] + '"';
		} else if (bind === 'class') {
			return 'class="' + props[value] + '"';
		}
	});	
		
	if(innerHtml) {
		content = content.replace('</', innerHtml + '</');
	}
		
	return content;
};

/* Problem 1 */
function solveProblem1() {
	
	var message = '',
	options = {};
	
	console.clear();
	console.log('Problem 1:');
	message = 'I\'m going to the #{exam} exam. I\'m feeling #{mood}. I will arive at #{time}.';
	options = {
		time: new Date(),
		exam: 'javascript',
		mood: 'anxious'
	};
	console.log('Text: ' + message);
	console.log('Result: ' + message.strFormat(options));
	//alert(message.strFormat(options));
}

/* Problem 2 */
function solveProblem2() {
	var str1 = '<div data-bind-content="name"></div>',
		str2 = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>',
		binds = {name: 'Elena', link: 'http://telerikacademy.com'},
		result = '';
	
	console.clear();	
	console.log('Problem 2:');
	console.log('Ex 1:');
	console.log(str1);

	result = str1.bind(binds);
	console.log('Result 1:');
	console.log(result);
	
	console.log('Ex 2:');
	console.log(str2);
	
	result = str2.bind(binds);
	console.log('Result 2:');
	console.log(result);
	//alert(result);
}

/* Made on: AIDE - Android IDE */
