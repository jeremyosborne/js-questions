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



```
What gets printed to console.log?

var mel = function(i) {
    return function (j) {
        i--;
        return i - j;
    };
};
var b = mel(20);
console.log(b(), b(1), b(3));
```

1. meta
    * Answers
        * NaN 17 14
        * 18 17 14
        * undefined 17 14
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
What gets printed to console.log?

var mel = (function(i) {
    return function (j) {
        i--;
        return i - j;
    };
})(20);
console.log(mel(1), mel(2), mel(3));
```

1. meta
    * Answers
        * 18 16 14
        * 18 17 16
        * undefined 16 14
        * undefined undefined unddefined
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

var f = function () {
    return function () {
        var i = Array.prototype.slice.call(arguments).reduce((p, n) => p + n, 0);
        return function (i) {
            return i * 10;
        }
    }
}
console.log(f()(3)(10));
```

1. meta
    * Answers
        * 100
        * 60
        * 30
        * 6
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

var f = function () {
    return function () {
        var i = Array.prototype.slice.call(arguments).reduce((p, n) => p + n, 0);
        return function () {
            return i * 10;
        }
    }
}
console.log(f()(3)(10));
```

1. meta
    * Answers
        * 30
        * 100
        * 60
        * 6
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

var three = function () {
    return function () {
        if (arguments.length === 3) {
            return Array.prototype.slice.call(arguments).reduce((p, n) => p + n, 0);
        } else {
            return null;
        }
    }
};
console.log(three()(1, 2, 3), three()(1, 2));
```

1. meta
    * Answers
        * 6 null
        * 3 null
        * 6 undefined
        * 3 undefined
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

var three = function () {
    return function () {
        if (arguments.length === 3) {
            Array.prototype.slice.call(arguments).reduce((p, n) => p + n, 0);
        } else {
            42;
        }
    }
};
console.log(three()(1, 2, 3), three()(1, 2));
```

1. meta
    * Answers
        * undefined undefined
        * 6 42
        * 6 undefined
        * undefined 42
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end


## Advanced - Scope



## Advanced - Standard



## Advanced - Types: Primitive and Native



```
What gets printed to console.log?

var items = [[0, 0], ["0", 10], ["1", 10], [1, 100]];
var mapped = new Map(items);
console.log(mapped.size, mapped.get(1), mapped.get(0), mapped.get("0"));
```

1. meta
    * Answers
        * 4 100 0 10
        * 4 100 10 10
        * undefined 100 0 10
        * undefined 100 10 10
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
What gets printed to console.log?

var items = [[0, 0], ["0", 10], ["1", 10], [1, "100"]];
var mapped = new Map(items);
mapped.forEach((v, k) => mapped.set(k, v+1));
console.log(mapped.get(0), mapped.get(1));
```

1. meta
    * Answers
        * 1 1001
        * 0 1001
        * 1 101
        * 0 101
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
What gets printed to console.log?

var items = [[0, 0], ["0", 1], [1, 2], ["1", 3]];
var mapped = new Map(items);
mapped.forEach((v, k) => mapped.set(k, v+1));
mapped.forEach((v, k) => mapped.set(k, v % 2));
var finalMap = new Map();
mapped.forEach((v, k) => finalMap.set(k, v));
for (let item of mapped) {
    console.log(item);
    break;
}
```

1. meta
    * Answers
        * [0, 1]
        * [1, 0]
        * [0, 0]
        * error is thrown
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
What gets printed to console.log?

var items = [[0, 0], ["0", 1], [1, 2], ["1", 3]];
var mapped = new Map(items);
mapped.forEach((v, k) => mapped.set(k, v+1));
mapped.forEach((v, k) => mapped.set(k, v % 2));
var finalMap = new Map();
mapped.forEach((v, k) => finalMap.set(k, v));
var final;
for (let item of mapped) {
    let [k, v] = item;
    final = [k, v * 10];
};
console.log(final[0], final[1]);
```

1. meta
    * Answers
        * [1, 0]
        * [1, 2]
        * [0, 1]
        * error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
2. meta end
