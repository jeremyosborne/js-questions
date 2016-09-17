# Advanced



## Advanced - Async





## Advanced - Browser






## Advanced - ECMAScript 6



```
What is printed to console.log?

var circular = function* () {
    var i = 0;
    while (true) {
        yield i++ % 10;
    }
};
var c = circular();
for (var i = 0; i < 12; i++) {
    c.next();
}
console.log(c.next().value, c.next().value);
```

1. meta
    * Answers
        * 2 3
        * 0 1
        * 1 2
        * 3 4
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

var circular = function* () {
    var i = 0;
    while (true) {
        yield i++ % 2;
    }
};
var c = circular();
for (var i = 0; i < 12; i++) {
    c.next();
}
var finalValue = c.next();
console.log(finalValue.value, finalValue.done);
```

1. meta
    * Answers
        * 0 false
        * 1 false
        * 0 true
        * 1 true
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

var circular = function* () {
    var i = 0;
    while (true) {
        yield i % 5;
        i++;
    }
};
var items = [0, 1, 2, 3, 4];
for (i of circular()) {
    if (items[i] === i) {
        items[i] = "boo";
    } else {
        break;
    }
}
console.log(items);
```

1. meta
    * Answers
        * ['boo', 'boo', 'boo', 'boo', 'boo']
        * [0, 1, 2, 3, 4]
        * [1, 2, 3, 4, 5]
        * ['boo', 1, 2, 3, 4]
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

var genGen = function(i) {
    return function* () {
        while (true) {
            yield i;
        }
    };
};
var g = genGen(5)();
for (let i of g) {
    if (i % 2) {
        break;
    } else {
        continue;
    }
}
g.return("yes");
console.log(g.next().done);
```

1. meta
    * Answers
        * false
        * true
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

var gen = function* () {
    yield 1;
    yield* function* () {
        yield 2;
    };
};

var it = gen();
var val = it.next();
console.log(val.value, val.done);
```

1. meta
    * Answers
        * 1 false
        * 2 true
        * 1 true
        * 2 false
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end



## Advanced - Functions






## Advanced - Scope



## Advanced - Standard



## Advanced - Types: Primitive and Native
