# Intermediate



```
What is a statement that could be used to describe closure in JavaScript?
```

1. meta
    * Answers
        * Functions defined within another function have access to variables declared in the outer scope.
        * Functions have access to all variables defined in all other functions.
        * Functions return a single value.
        * Functions are call by object reference.
    * Time
        * 1 Minuteute
    * Category
        * Theory
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


## Intermediate - Async


```
What is printed by the console.log statements?

var f = function () {
    console.log(2);
};
setTimeout(f, 10);
console.log(1);
```

1. meta
    * Answers
        * 1, 2
        * 2, 1
        * 1
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
What is printed by the console.log statements?

var a = 0;
var b = 1;
var f = function () {
    a = 2;
    b = 3;
    console.log(b);
};
setTimeout(f, 10);
console.log(a);
```

1. meta
    * Answers
        * 0, 3
        * 0, 1
        * 2, 3
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
What is printed by the console.log statement?

var f = function () {
    var i = 1;
    console.log(i++);
    setTimeout(f, 100);
};
f();
```

1. meta
    * Answers
        * 1, 1, 1, 1, 1...
        * 1, 2, 3, 4, 5...
        * 1
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
What is printed by console.log?

var f = function () {
    var i = 1;
    console.log(i++);
};
setInterval(f, 10);
```

1. meta
    * Answers
        * 1, 1, 1, 1, 1...
        * 1, 2, 3, 4, 5...
        * 1
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
Assuming we are in a web browser, what is printed by console.log?

window.addEventListener("load", function () {
    document.body.addEventListener("click", function () {
        console.log(2);
    });
    console.log(3);
});
console.log(1);
```

1. meta
    * Answers
        * 1, 3
        * 1, 2, 3
        * 1, 3, 2
        * 1
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Browser
        * Asynchronous
2. meta end


```
What is printed by console.log?

var f = function () {
    console.log(42);
};
var id = setInterval(f, 10);
clearInterval(id);
```

1. meta
    * Answers
        * nothing is printed
        * 42
        * 42, 42, 42, 42
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
Assuming we are working with idiomatic Node.js, what would be an accurate statement to make about `fs.readFile` and `fs.readFileSync`?
```

1. meta
    * Answers
        * fs.readFileSync is blocking and the code will wait for the function to return before continuing.
        * fs.readFile is blocking and will wait for the function to return before continuing.
        * fs.readFileSync will optionally take a callback.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Node.js
        * Asynchronous
2. meta end


```
What is printed by console.log?

var i = 0;
setTimeout(function () {
    i += 1;
    console.log(i);
}, 100)
setTimeout(function () {
    console.log("hi");
}, 200);
console.log("hello")
```

1. meta
    * Answers
        * hello, 1, hi
        * hello, hi
        * hello, 1, hi, 2, 3, 4....
        * hello 0, hi
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


## Intermediate - Functions


```
What is the value printed by console.log?

var f = function (a, b) {
    console.log(arguments.length);
};
f(1, 2, 3);
```

1. meta
    * Answers
        * 3
        * 1
        * 2
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (a, b) {
    return a + b;
};
console.log(f.length);
```

1. meta
    * Answers
        * 3
        * 1
        * 2
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var Animal = function (a) {
    this.name = a;
};
var cat = new Animal("Tom");
console.log(cat.name);
```

1. meta
    * Answers
        * Tom
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var Animal = function (a) {
    var name = a;
    this.getName = function () {
        return name;
    };
};
var cat = new Animal("Tom");
console.log(cat.name);
```

1. meta
    * Answers
        * undefined
        * Tom
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var Animal = function (a) {
    var name = a;
    this.getName = function () {
        return name;
    };
};
var cat = new Animal("Tom");
console.log(cat.getName());
```

1. meta
    * Answers
        * Tom
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var Animal = function (a) {
    var name = a;
};
Animal.prototype.getName = function () {
    return name;
};
var cat = new Animal("Tom");
console.log(cat.getName());
```

1. meta
    * Answers
        * Error
        * undefined
        * Tom
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
Which statement is most correct when describing the differences between:

// Function Declaration
function f () {
    return 42;
}

and:

// Function Expression
var f = function () {
    return 42;
};
```

1. meta
    * Answers
        * The Function Declaration is hoisted and can be defined before being used.
        * There is no difference.
        * The results of typeof of the Function Expression is 'function' while the typeof of the Function Declaration is 'object'.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function () {
    return function () {
        return 42;
    };
};
console.log(f()());
```

1. meta
    * Answers
        * 42
        * Error
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (a, b, c) {
    console.log(a, b, c)
};
f(1, 2);
```

1. meta
    * Answers
        * 1, 2, undefined
        * 1, 2
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (a, b, c) {
    console.log(a, b, c)
};
f(1, 2, 3, 4);
```

1. meta
    * Answers
        * 1, 2, 3
        * 1, 2, 3, 4
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (g) {
    return g(5, 4);
};
var g = function(n) {
    console.log(n);
};
f(g);
```

1. meta
    * Answers
        * 5
        * 5, 4
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (g) {
    return function () {
        return g(42);
    };
};
var g = function (n) {
    return n + 42;
};
var h = f(g);
console.log(h());
```

1. meta
    * Answers
        * 84
        * 42
        * undefined
        * Error
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var f = function (g) {
    g(42);
};
var g = function (n) {
    return n + 42;
};
var h = f(g);
console.log(h());
```

1. meta
    * Answers
        * Error
        * 84
        * 42
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


## Intermediate - Prototype and Inheritance

```
Disregarding whether or not this is a good practice, what is the value printed by console.log?

Object.prototype._color = 'green';
var Cat = function (color) {
    color = color || this._color;
    this.color = function () {
        return color;
    };
};
var tom = new Cat();
console.log(tom.color());
```

1. meta
    * Answers
        * green
        * Error
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What will be printed by console.log?

var Animal = function (name) {
    this.name = name || "blah";
};
Animal.prototype.speak = function () {
    return "My name is: " + this.name;
};

var Cat = function (name) {
    this.name = name || "Tom";
};
Cat.prototype = new Animal();

var c = new Cat();
console.log(c.speak());
```

1. meta
    * Answers
        * My name is: Tom
        * My name is: blah
        * undefined
        * Error
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What will be printed by console.log?

var Animal = function (name) {
    this.name = name || "blah";
};
Animal.prototype.speak = function () {
    return "My name is: " + this.name;
};

var Cat = function (name) {
    this.name = name || "Tom";
};
Cat.prototype = new Animal();
Cat.prototype.speak = function () {
    return this.name + " says meow!";
};

var c = new Cat();
console.log(c.speak());
```

1. meta
    * Answers
        * Tom says meow!
        * My name is: Tom
        * My name is: blah
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What will be printed by console.log?

var Animal = function (name) {
    this.name = name || "blah";
};
Animal.prototype.speak = function () {
    return "My name is: " + this.name;
};

var Cat = function () {};
Cat.prototype = new Animal();
Cat.prototype.speak = function () {
    return this.name + " says meow!";
};

var c = new Cat("Tom");
console.log(c.speak());
```

1. meta
    * Answers
        * blah says meow!
        * My name is: Tom
        * My name is: blah
        * Tom says meow!
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What will be printed by console.log?

var Animal = function (name) {
    this.name = name || "blah";
};
Animal.prototype.speak = function () {
    return "My name is: " + this.name;
};

var Cat = function () {};
Cat.prototype = new Animal();
Cat.speak = function () {
    return this.name + " says meow!";
};

var c = new Cat("Tom");
console.log(c.speak());
```

1. meta
    * Answers
        * My name is: blah
        * blah says meow!
        * My name is: Tom
        * Tom says meow!
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


## Intermediate - Scope

```
What is the value of printed by console.log?

var x = 10;
var f = function () {
    x = 42;
};
f();
console.log(x);
```

1. meta
    * Answers
        * 42
        * 10
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var x = 10;
var f = function () {
    var x = 42;
};
f();
console.log(x);
```

1. meta
    * Answers
        * 10
        * 42
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log when the code is run in the browser?

var x = 10;
var f = function () {
    var x = 42;
    console.log(window.x);
};
f();
```

1. meta
    * Answers
        * 10
        * 42
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript, Browser
2. meta end


```
What is the value printed by console.log when the code is run?

var x = 10;
var f = function (x) {
    x = 42;
    return x;
};
f();
console.log(x);
```

1. meta
    * Answers
        * 10
        * 42
        * undefined
        * Error
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end



```
What is the value printed by console.log when the code is run?

var x = 10;
var f = function () {
    var x = 42;
    (function() {
        x = 84;
    })();
    console.log(x);
};
f();
```

1. meta
    * Answers
        * 84
        * 42
        * 10
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log when the code is run?

var x = {};
var f = function (y) {
    y.test = 42;
};
f(x);
console.log(x.test)
```

1. meta
    * Answers
        * 42
        * Error
        * undefined
        * null
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log when the code is run?

var x = {};
var f = function (y) {
    y = {}
    y.test = 42;
};
f(x);
console.log(x.test)
```

1. meta
    * Answers
        * undefined
        * 42
        * Error
        * null
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log when the code is run?

for (var i = 0; i < 10; i++) {
    /* pretend code exists here */
}
console.log(i)
```

1. meta
    * Answers
        * 10
        * 9
        * Error
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log when the code is run?

for (let i = 0; i < 10; i++) {
    /* pretend code exists here */
}
console.log(i)
```

1. meta
    * Answers
        * Error
        * 0
        * 10
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


## Intermediate - Types: Primitive and Native


```
What is the value printed by console.log?

var x = [1, 2, 3];
var y = x.slice(1);
x[1] = 4;
console.log(y);
```

1. meta
    * Answers
        * [2, 3]
        * [1, 2, 3]
        * [1, 4, 3]
        * [4, 3]
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var x = [1, 2, 3];
x.shift();
x.unshift(0);
x.pop();
x.push(4);
console.log(x);
```

1. meta
    * Answers
        * [0, 2, 4]
        * [1, 2, 3]
        * [1, 3, 5]
        * [0, 1, 2, 3, 4]
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end



```
What is printed in the console output?

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
x.sort();
console.log(x);
```

1. meta
    * Answers
        * [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
        * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        * [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var x = {a: 10, b: 10};
x.b += x.a;
var y = x;
y.b += x.a;
console.log(x.b);
```

1. meta
    * Answers
        * 30
        * 20
        * 10
        * 40
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var x = {a: 10, b: 10};
console.log(x.toString());
```

1. meta
    * Answers
        * [object Object]
        * "{a: 10, b: 10}"
        * "10, 10"
        * Error
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var x = {a: 10, b: 10};
console.log(x.toString());
```

1. meta
    * Answers
        * [object Object]
        * "{a: 10, b: 10}"
        * "10, 10"
        * Error
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var a = 42 + "42";
console.log(a);
```

1. meta
    * Answers
        * 4242
        * 84
        * Error
        * 42
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

var a = 42 - "42";
console.log(a);
```

1. meta
    * Answers
        * 0
        * 4242
        * Error
        * 42
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is the value printed by console.log?

console.log(null == undefined);
```

1. meta
    * Answers
        * 0
        * 4242
        * Error
        * 42
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
Which explanation is most correct about how '==' is different from '==='?
```

1. meta
    * Answers
        * '===' checks value and type.
        * '==' checks value and type.
        * '===' is not used in JavaScript.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
Which of the following will throw an error in JavaScript Strict Mode?
```

1. meta
    * Answers
        * Assigning a value to an undeclared variable will throw an error.
        * Creating objects with new Object().
        * Accessing the arguments object.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

console.log(parseInt("123.45"));
```

1. meta
    * Answers
        * 123
        * 123.45
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

console.log(isNaN("42"));
```

1. meta
    * Answers
        * false
        * true
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var s = "hello how are you?";
s.replace("hello", "mellow");
console.log(s);
```

1. meta
    * Answers
        * hello how are you?
        * mellow how are you?
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var a = [1, 2, 3, 4];
a = a.map(function (i) {
    return i % 2;
});
console.log(a);
```

1. meta
    * Answers
        * [1, 0, 1, 0]
        * [1, 3]
        * [1, 2, 3, 4]
        * 10
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var a = [1, 2, 3, 4];
a = a.filter(function (i) {
    return i % 2;
});
console.log(a);
```

1. meta
    * Answers
        * [1, 3]
        * [1, 2, 3, 4]
        * [1, 0, 3, 0]
        * 10
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var a = [1, 2, 3, 4];
a = a.reduce(function (a, b) {
    return a + b;
}, 1);
console.log(a);
```

1. meta
    * Answers
        * 11
        * [1, 2, 3, 4]
        * 10
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end
