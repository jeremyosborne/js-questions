# Intermediate

## Intermediate - Standard


```
What is printed to console.log?

var s = "hello";
console.log(s.split());
```

1. meta
    * Answers
        * [ "hello" ]
        * [ "h", "e", "l", "l", "o" ]
        * hello
        * Error is thrown
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

var p = {
    i: 42
};
var o = Object.create(p, {
    i: {
        value: 24
    }
});
console.log(o.i);
```

1. meta
    * Answers
        * 42
        * 24
        * undefined
        * Error is thrown
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

Object.prototype.test = 42;
var o = { i: 84 };
for (var p in o) {
    console.log(p, o[p]);
}
```

1. meta
    * Answers
        * i 84 and test 42
        * i 84
        * test 42
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

var o = { i: 84 };
Object.freeze(o);
o.i = 42;
console.log(o.i);
```

1. meta
    * Answers
        * 84
        * 42
        * Error is thrown
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
For the implicit arguments object available within function calls, what is one correct way to convert the array-like arguments object into a real Array instance?
```

1. meta
    * Answers
        * Array.prototype.slice.call(arguments);
        * Array.slice(arguments);
        * Array.prototype.slice(arguments);
        * arguments.slice();
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

var o = {i: 42, j: 84, k: 100};
var k = Object.keys(o);
var total = 0;
for (var i = 0; i < k.length; i++) {
    total += o[k[i]];
}
console.log(total);
```

1. meta
    * Answers
        * 226
        * ijk
        * ijk226
        * 226
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
2. meta end



## Intermediate - ECMAScript 6



```
Which of the answers is equivalent to the following:

var f = function (i) {
    return i;
};
```

1. meta
    * Answers
        * var f = i => i;
        * var f = i > i;
        * var f = i -> i;
        * var f = (i) <= i;
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

var Animal = function (name) {
    var speak = () => name || "Bob"
    this.speak = speak;
}
var cat = new Animal("Tom");
console.log(cat.speak());
```

1. meta
    * Answers
        * Tom
        * undefined
        * Bob
        * Error is thrown
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
Which of the answers is equivalent to the following:

class Animal {
    constructor(i) {
        this.i = i;
    }
}
```

1. meta
    * Answers
        * var Animal = function (i) { this.i = i; };
        * var Animal = function (i) { var i = i; };
        * var Animal = function (i) { this.i = i; return i; };
        * var Animal = function (i) { this.i; };
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

class Animal {
    constructor(name) {
        this.name = name || "Fido";
    }
    toString() {
        return "My name is: " + this.name;
    }
}
var cat = new Animal();
console.log("" + cat);
```

1. meta
    * Answers
        * My name is: Fido
        * [object Object]
        * My name is: undefined
        * Error is thrown
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed by console.log?

var f = function (x, ...y) {
  console.log(y);
}
f(1, 2, "cat", 3)
```

1. meta
    * Answers
        * [2, "cat", 3]
        * [1, 2, 3]
        * 3
        * [1, 2, "cat", 3]
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end



```
What is printed by console.log?

var f = function () {
    const x = 42;
    var a = 24;
    x = 100;
    console.log(a, x);
};
```

1. meta
    * Answers
        * Error thrown, console.log is not reached
        * 24, 100
        * 24, 42
        * 24, undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What will be printed by console.log?

var f = function*() {
    for (var i = 0; i < 10; i++) {
        yield i;
    }
};

var a = [];
for (var i of f()) {
    a.push(i);
}
console.log(a);
```

1. meta
    * Answers
        * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        * [ 0 ]
        * 9
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

var a = "abc";
for (let i of a) {
    console.log(i);
    break;
}
```

1. meta
    * Answers
        * a
        * abc
        * Error is thrown.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
Comparing Node.js to ECMAScript 6 modules, which of the answers is equivalent to the following in ECMAScript 6 specific syntax?

module.exports.test = function (i) { return i; };
```

1. meta
    * Answers
        * export var test = function (i) { return i; };
        * exports var test = function (i) { return i; };
        * exports.test = function (i) { return i; };
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What will be printed to console.log?

var s = new Set();
s.add(42);
s.add("42");
s.add(42);
console.log(s.size);
```

1. meta
    * Answers
        * 2
        * 3
        * 1
        * undefined
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What will be printed to console.log?

var m = new Map();
m.set(42, "Hello");
m.set("42", "World");
console.log(m.get(42), m.get("42"));
```

1. meta
    * Answers
        * Hello World
        * Hello Hello
        * World World
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What will be printed to console.log?

console.log(isNaN("abc"), Number.isNaN("abc"));
```

1. meta
    * Answers
        * true, false
        * true, true
        * false, false
        * false, true
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What will be printed to console.log?

var o = {
    i: 42
};
var p = {};
Object.assign(p, o);
console.log(o.i, p.i);
```

1. meta
    * Answers
        * 42, 42
        * 42, undefined
        * undefined, undefined
        * Error is thrown.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
Starting in ECMAScript6, which of the answers is the equivalent of the following?

var f = function (a, b) {
    a = a || 42;
    b = b || 34;
    return a + b;
};
```

1. meta
    * Answers
        * var f = function (a=42, b=34) { return a + b };
        * var f = function (a (42), b (34)) { return a + b };
        * var f = function (a default 42, b default 34) { return a + b };
        * Default parameter values are not a feature of ECMAScript 6.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed in console.log?

var s = "Hello";
console.log([...s]);
```

1. meta
    * Answers
        * [ 'H', 'e', 'l', 'l', 'o' ]
        * Hello
        * [ 'Hello' ]
        * Error is thrown.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed in console.log?

var o = {
    i: 42,
    j: 24
};
var { i, j } = o;
console.log(j, i);
```

1. meta
    * Answers
        * 24, 42
        * 42, 24
        * undefined, undefined
        * Error is thrown.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed in console.log?

var o = {
    i: 42,
    j: 24
};
var { i: a, j: b } = o;
console.log(b, a);
```

1. meta
    * Answers
        * 24, 42
        * 42, 24
        * undefined, undefined
        * Error is thrown.
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

var f = function([a, b, c]) {
    return a + b + c + 100;
};
var a = [1, 2, 3];
console.log(f(a));
```

1. meta
    * Answers
        * 106
        * Error is thrown.
        * undefined
        * NaN
    * Time
        * 1 Minute
    * Category
        * Practical
    * Level
        * Intermediate
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end
