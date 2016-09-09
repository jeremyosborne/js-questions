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



# Advanced



## Advanced - Async


```
What is printed to console.log?

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
```

1. meta
    * Answers
        * 1 then 4 then 3 then 2
        * 1 then 3 then 4 then 2
        * 1 then 2 then 3 then 4
        * 1 then 3 then 2 then 4
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

(function() {
    var i = 0;
    var id = setTimeout(function () {
        i += 1;
        if (i <= 5) {
            setTimeout(arguments.callee, 10);
        }
    }, 10);
    console.log(i);
})();
```

1. meta
    * Answers
        * 0
        * 6
        * 5
        * Error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var Animal = function (color) {
    this.color = color || "Brown";
    this.speak = function () {
        console.log(this.color);
    };
};
var dog = new Animal("Black");
setTimeout(dog.speak, 10);
```

1. meta
    * Answers
        * undefined
        * Brown
        * Black
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var n = 24;
var p = new Promise(function (resolve, reject) {
    resolve(100);
});
p.then(function (i) {
    n = i;
    return 42;
}).then(function (i) {
    n = i;
    throw new Error();
}).catch(function () {
    console.log(n);
});
console.log(n);
```

1. meta
    * Answers
        * 24 then 42
        * 24 then 100
        * 42 then 24
        * 100 then 24
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

var n = 1;
var pgen = function () {
    n += 1;
    return Promise.resolve(n);
};
Promise.all([pgen(), pgen(), pgen()])
.then(function (answers) {
    console.log(answers[0], answers[1], answers[2]);
});
```

1. meta
    * Answers
        * 2, 3, 4
        * 0, 1, 2
        * 2, 1, 0
        * 1, 2, 3
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

Promise.all([Promise.resolve(1), Promise.reject(new Error("Error!")), Promise.resolve(3)])
.then(function (answers) {
    console.log(answers[0], answers[1], answers[2]);
})
.catch(function (e) {
    console.log(e.message);
});
```

1. meta
    * Answers
        * Error!
        * 1 Error! 3
        * 1, 3 then Error!
        * 1, 3
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end



## Advanced - ECMAScript 6



## Advanced - Functions


```
What is printed to console.log?

var g = (function f(f){
   return f;
})(function(){ return 42; });
console.log(g(84));
```

1. meta
    * Answers
        * 42
        * 84
        * undefined
        * Error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var wrap = function (f) {
    return function () {
        return 42 + f();
    };
};
var f = function () {
    return 42;
};
f = wrap(f);
console.log(f(100));
```

1. meta
    * Answers
        * 84
        * 42
        * 184
        * 100
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var wrap = function (f) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        args = args.reverse();
        return f.apply(null, args);
    };
};
var f = function (a, b, c) {
    return a * b + c;
};
f = wrap(f);
console.log(f(1, 2, 3));
```

1. meta
    * Answers
        * 7
        * 5
        * 6
        * 2
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var f = function () {
    return this.name;
};

var o = {
    name: "Mo"
};

var o2 = {
    name: "Mo Jr."
};

var g = f.bind(o);
o2.name = g;
console.log(o2.name());
```

1. meta
    * Answers
        * Mo
        * Mo Jr.
        * undefined
        * Error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var f = function (a, b) {
    return this.name + " " + a + " " + b;
};

var o = {
    name: "Mo"
};

var g = f.bind(o, "says", "hi");
console.log(g());
```

1. meta
    * Answers
        * Mo says hi
        * Mo undefined undefined
        * Mo
        * Error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end



## Advanced - Scope


```
What is printed to console.log?

var f = function () {
    if (!console) {
        var console = {};
        console.log = function () {
            return 42;
        }
    }
    console.log(100);
};
f();
```

1. meta
    * Answers
        * undefined
        * 100
        * 42
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var f = function (i) {
    return function (i) {
        return i;
    };
};

var g = f(42);
console.log(g(84));
```

1. meta
    * Answers
        * 84
        * 42
        * undefined
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var Animal = function (name) {
    this.name = name || "Fido";
    this.speak = () => this.name;
};

var dog = new Animal();

var otherDog = {
    name: "Not Fido",
    speak: dog.speak
};
console.log(otherDog.speak());
```

1. meta
    * Answers
        * Fido
        * Not Fido
        * undefined
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

var x = 42;
(function () {
    var x = 24;
    var f = function () {
        x = 84;
    };
    (function () {
        f();
        console.log(x);
    })();
})();
console.log(x);
```

1. meta
    * Answers
        * 84 then 42
        * 42 then 84
        * 42 then 42
        * 24 then 42
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

(function () {
    for (var i = 0; i < 10; i++) {
        var a = i;
    }
    console.log(i);
})();
```

1. meta
    * Answers
        * 10
        * 0
        * Error is thrown
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end



## Advanced - Standard



```
What is printed to console.log?

var n = null;
var u = undefined;
var f = function () {};
console.log(typeof n, typeof u, typeof f);
```

1. meta
    * Answers
        * object undefined function
        * null undefined function
        * object undefined object
        * null object function
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
Assuming a browser environment, what is printed to console.log?

window.onload = function () {
    console.log(42);
};
var ev1 = function () {
    console.log(84);
};
window.addEventListener("load", ev1);
```

1. meta
    * Answers
        * 42, 84
        * 42
        * 84
        * 84, 42
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
Assuming a browser environment, what is printed to console.log?

window.onload = function () {
    console.log(42);
};
var ev1 = function () {
    this.removeEventListener("load", ev2);
};
var ev2 = function () {
    console.log(84);
}
window.addEventListener("load", ev1);
window.addEventListener("load", ev2);
```

1. meta
    * Answers
        * 42
        * 42, 84
        * 84
        * 84, 42
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end



## Advanced - Types: Primitive and Native


```
What is printed to console.log?

var i = 42;
var j = NaN;
var k = 84;
var s = (function () {
    if (j > 0) {
        return i + j + k;
    } else {
        return i + k;
    }
})();
console.log(s);
```

1. meta
    * Answers
        * 126
        * 42NaN84
        * 4284
        * NaN
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var Animal = function (name) {
    this.name = name || "Fido";
};
var methods = {
    speak: function () {
        return this.name || "Cat";
    }
};
var cat = new Animal("Dog");
for (var m in methods) {
    cat[m] = methods[m];
}
console.log(cat.speak());
```

1. meta
    * Answers
        * Dog
        * Cat
        * Fido
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var Animal = function (name) {
    this.name = name || "Fido";
};
Animal.prototype.speak = function () {
    return this.name;
};

var Cat = function (name) {
    Animal.call(this, name);
    name = name || "Gato";
};
Cat.prototype = new Animal();

var cat = new Cat("Red");
console.log(cat.speak());
```

1. meta
    * Answers
        * Red
        * Gato
        * Fido
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var Animal = function (name) {
    this.name = name || "Fido";
};
Animal.prototype.speak = function () {
    return this.name;
};

var Cat = function (name) {
    name = name || "Gato";
};
Cat.prototype = new Animal();

var cat = new Cat("Red");
console.log(cat.speak());
```

1. meta
    * Answers
        * Fido
        * Gato
        * Red
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var speech = function () {
    var args = Array.prototype.slice.call(arguments);
    var words = args.map(function (w, i) {
        return i % 2 === 0 ? "CENSORED" : w;
    });
    return words.join(" ");
};
console.log(speech("Hello", "world", "what's", "up?"));
```

1. meta
    * Answers
        * CENSORED world CENSORED up?
        * Hello CENSORED what's CENSORED
        * Hello world what's up?
        * undefined undefined undefined undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var speech = function () {
    var args = Array.prototype.slice.call(arguments);
    var words = args.filter(function (w, i) {
        return i % 2;
    });
    return words.join(" ");
};
console.log(speech("Hello", "world", "what's", "up?"));
```

1. meta
    * Answers
        * world up?
        * Hello what's
        * Hello world what's up?
        * Hello world
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


```
Assuming a browser environment, what is printed to console.log?

var Animal = function () {
    this.name = "Fido";
};
var dog = Animal();
console.log(window.name, dog);
```

1. meta
    * Answers
        * Fido undefined
        * undefined undefined
        * undefined Fido
        * Error
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end
