!function () {
    function foo(){
        console.log('foo');
        
        
        
    };
foo();

}(); // needs () function closure or else return false


!function(underscore){
    
    underscore.someawesomemethod ='Wow!!!!';
    console.log(underscore.VERSION);
}(_);


var awesomeNewModule = (function () {
    var exports = {};
    exports.helloMars = function(){
        console.log('Hello Martians !!!');
    };
    return exports
}());



// To stop global clutter
var awesomeNewModule = (function () {
    var exports = {
        foo: 5,
        bar: 10
        
    };
    exports.helloMars = function(){
        console.log('Hello Martians !!!');
    };
    exports.byeMars = function(){
        console.log('Goodbye Martians !!!')
        
    };
    return exports
}());

// loose augmentation
var awesomeNewModule.sub = (function (exports) {
    var exports = {
        foo: 5,
        bar: 10
        
    };
    exports.helloMars = function(){
        console.log('Hello Martians !!!');
    };
    exports.byeMars = function(){
        console.log('Goodbye Martians !!!')
        
    };
    return exports
}( awesomeNewModule.sub || {} ));






















