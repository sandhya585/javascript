var randomBodyParts = ['Face','Nose','Hair','Chin'];

var randomadjectives = ['Smelly','Boring','Stupid','Lazy'];

var randomwords = ['Fly','Marmot','Stick','Dog','Rat'];

var randomBodyPart = randomBodyParts [Math.floor(Math.random() * 4)];

var randomadjective = randomadjectives [Math.floor(Math.random()* 4)];

var randomword = randomwords [Math.floor(Math.random()* 5)];

console.log('your' + randomBodyPart + 'is like a' + randomadjective + ' ' + randomword + '!!!');