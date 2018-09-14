const regex=/^corn/;
regex.test('corncon');   //true
regex.test('popcorn');   //false

const string1 = 'corndog';
string1.replace(regex, 'hot'); //"hotdog"