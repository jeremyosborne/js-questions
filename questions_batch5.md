# Advanced



## Advanced - Async



```
What is printed to console log?

var queue = function (items) {
    var results = [];
    var doit = function () {
        if (items.length) {
            var i = items.pop();
            results.push(i());
            setTimeout(doit, 10);
        }
        return results;
    };
    return doit;
};
var q = queue([() => 1, () => 3]);
console.log(q());
```

1. meta
    * Answers
        * [ 3 ]
        * [ 1 ,3 ]
        * [ 1 ]
        * error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
What is printed by console.log?

var queue = function (items) {
    var results = [];
    var doit = function () {
        if (items.length) {
            var i = items.pop();
            results.push(i());
            setTimeout(doit, 10);
        }
        return results
    };
    return doit;
};
var q = queue([() => 1, () => 3]);
var results = q();
setTimeout(function () {
    console.log(results);
}, 1000);
```

1. meta
    * Answers
        * [ 3, 1 ]
        * [ 3 ]
        * [ 1 ]
        * [ 1, 3 ]
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


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
        * 5 Minutes
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
        * ECMAScript 6
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
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

Promise.race([Promise.resolve(1), Promise.reject(2)]).then(function (val) {
    console.log(val);
});
```

1. meta
    * Answers
        * 1
        * 2
        * 1, 2
        * udnefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Asynchronous
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


```
What is printed to console.log?

var healthMixin = {
    health: 100,
    heal: function (i) {
        this.health += i || 1;
    }
};

var positionMixin = {
    x: 0,
    y: 0,
    teleport: function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    },
    move: function(x, y) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
    }
};

var mixer = function() {
    var args = Array.prototype.slice.call(arguments);
    var base = args[0];
    var mixins = args.slice(1);
    mixins.forEach(function (m) {
        for (var p in m) {
            base[p] = m[p];
        }
    });
    return base;
};

var fuzzyMonsterFactory = function () {
    var proto = {
        name: 'Fuzzy',
        health: 10
    };
    return Object.create(proto);
};

var mobileMonsterFactory = function () {
    var m = Object.create(fuzzyMonsterFactory());
    return mixer(m, positionMixin);
};

var goo = mobileMonsterFactory();
goo.teleport(0, 5);
goo.move(10, 10);
console.log(goo.x, goo.y);
```

1. meta
    * Answers
        * 10 15
        * 0 0
        * 10 10
        * 0 5
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

var healthMixin = {
    health: 100,
    heal: function (i) {
        this.health += i || 1;
    }
};

var positionMixin = {
    x: 0,
    y: 0,
    teleport: function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    },
    move: function(x, y) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
    }
};

var mixer = function() {
    var args = Array.prototype.slice.call(arguments);
    var base = args[0];
    var mixins = args.slice(1);
    mixins.forEach(function (m) {
        for (var p in m) {
            base[p] = m[p];
        }
    });
    return base;
};

var fuzzyMonsterFactory = function () {
    var proto = {
        name: 'Fuzzy',
        health: 10
    };
    return Object.create(proto);
};

var mobileMonsterFactory = function () {
    var m = Object.create(fuzzyMonsterFactory());
    return mixer(m, positionMixin, healthMixin);
};

var goo = mobileMonsterFactory();
goo.teleport();
goo.move(10, 10);
goo.heal(10);
console.log(goo.x, goo.y, goo.health);
```

1. meta
    * Answers
        * 10 10 110
        * 10 10 100
        * 0 0 100
        * 10 10 0
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

var healthMixin = {
    health: 100,
    heal: function (i) {
        this.health += i || 1;
    }
};

var positionMixin = {
    x: 0,
    y: 0,
    teleport: function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    },
    move: function(x, y) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
    }
};

var mixer = function() {
    var args = Array.prototype.slice.call(arguments);
    var base = args[0];
    var mixins = args.slice(1);
    mixins.forEach(function (m) {
        for (var p in m) {
            base[p] = m[p];
        }
    });
    return base;
};

var fuzzyMonsterFactory = function () {
    var proto = {
        name: 'Fuzzy',
        health: 10
    };
    return Object.create(proto);
};

var mobileMonsterFactory = function () {
    var m = Object.create(fuzzyMonsterFactory());
    return mixer(m, positionMixin, healthMixin);
};

var goo = mobileMonsterFactory();
var props = [];
for (var p in goo) {
    if (goo.hasOwnProperty(p)) {
        props.push(p);
    }
}
console.log(props);
```

1. meta
    * Answers
        * [ 'x', 'y', 'teleport', 'move', 'health', 'heal' ]
        * [ 'x', 'y', 'teleport', 'name', 'move', 'health', 'heal' ]
        * [ 'x', 'y', 'health' ]
        * [ ]
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

var healthMixin = {
    health: 100,
    heal: function (i) {
        this.health += i || 1;
    }
};

var positionMixin = {
    x: 0,
    y: 0,
    teleport: function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    },
    move: function(x, y) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
    }
};

var mixer = function() {
    var args = Array.prototype.slice.call(arguments);
    var base = args[0];
    var mixins = args.slice(1);
    mixins.forEach(function (m) {
        for (var p in m) {
            base[p] = m[p];
        }
    });
    return base;
};

var fuzzyMonsterFactory = function () {
    var proto = {
        name: 'Fuzzy',
        health: 10
    };
    return Object.create(proto);
};

var mobileMonsterFactory = function () {
    var m = Object.create(fuzzyMonsterFactory());
    return mixer(m, positionMixin, healthMixin);
};

var goo = mobileMonsterFactory();
mixer(goo, {
    z: 0,
    move: function(x, y, z) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
        this.z = this.z + z || 0;
    }
});
goo.move(1, 2);
goo.move(null, 3, 5);
goo.teleport(2, 4);
console.log(goo.x, goo.y, goo.z);
```

1. meta
    * Answers
        * 2 4 5
        * 2 4 0
        * NaN 4 5
        * 2 4 undefined
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

var healthMixin = {
    health: 100,
    heal: function (i) {
        this.health += i || 1;
    }
};

var positionMixin = {
    x: 0,
    y: 0,
    teleport: function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    },
    move: function(x, y) {
        this.x = this.x + x || 0;
        this.y = this.y + y || 0;
    }
};

var mixer = function() {
    var args = Array.prototype.slice.call(arguments);
    var base = args[0];
    var mixins = args.slice(1);
    mixins.forEach(function (m) {
        for (var p in m) {
            base[p] = m[p];
        }
    });
    return base;
};

var fuzzyMonsterFactory = function () {
    var proto = {
        name: 'Fuzzy',
        health: 10
    };
    return Object.create(proto);
};

var mobileMonsterFactory = function () {
    var m = Object.create(fuzzyMonsterFactory());
    return mixer(m, positionMixin, healthMixin);
};

var goo = mobileMonsterFactory();
var goo2 = fuzzyMonsterFactory();
mixer(goo2, {
    x: goo.x,
    y: goo.y,
    move: function (x, y) {
        this.x += x * 2 || 0;
        this.y += y * 2 || 0;
    }
});
delete goo2.move;
goo2.move(10, 10);
console.log(goo.x, goo.y);
```

1. meta
    * Answers
        * Error is thrown
        * 10 10
        * 20 20
        * 0 0
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
What is printed in console.log?

var chainer = function (f) {
    return function () {
        f.call(this);
        return this;
    };
};

var bobby = {
    name: "Bobby",
    talk: chainer(function () {
        return this.name;
    })
};
console.log(bobby.talk().toString(), bobby.talk().talk().name);
```

1. meta
    * Answers
        * [object Object] Bobby
        * Bobby Bobby
        * undefined Bobby
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
What is printed in console.log?

var chainer = function (f) {
    return function () {
        f.call(this);
        return this;
    };
};

var bobby = {
    name: "Bobby",
    talk: chainer(function () {
        return this.name;
    }),
    censor: chainer(function() {
        this.name = "XXXXX";
    })
};
var bernie = {
    name: "Bernie"
};
console.log(bobby.censor.call(bernie).name);
```

1. meta
    * Answers
        * XXXXX
        * Bernie
        * Bobby
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
What is printed in console.log?

var chainer = function (f) {
    return function () {
        f.call(this);
        return this;
    };
};

var bobby = {
    name: "Bobby",
    talk: chainer(function () {
        return this.name;
    }),
    censor: chainer(function() {
        this.name = "XXXXX";
    })
};
var bernie = {
    name: "Bernie",
    talk: bobby.talk
};
console.log(bernie.talk().name, bobby.talk().name);
```

1. meta
    * Answers
        * Bernie Bobby
        * Bobby Bobby
        * undefined Bobby
        * Bernie Bernie
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
What gets printed to console.log?

var f = (function () {
    f1 = function (a) {
        return a + 2;
    };
    var f1 = function (a) {
        return a + 4;
    };
    return function (a) {
        return f1(a) + 4;
    };
})();
console.log(f(2));
```

1. meta
    * Answers
        * 10
        * 8
        * 6
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
What gets printed to console.log?

var f = (function () {
    var f1 = function (a) {
        f1 = a;
    };
    return function (a) {
        f1(a);
        return f1 + 4;
    };
})();
console.log(f(2));
```

1. meta
    * Answers
        * 6
        * NaN
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
        * ECMAScript 6
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
        * ECMAScript 6
2. meta end


# Guru


```
What is printed to console.log?

console.log(parseInt("abc") < Infinity);
```

1. meta
    * Answers
        * false
        * true
        * Error is thrown
        * NaN
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var x = "42" + NaN;
x = parseInt(x);
console.log(x + x - "42");
```

1. meta
    * Answers
        * 42
        * 424242
        * 8442
        * NaN
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

console.log(NaN + NaN + "NaN" - NaN);
```

1. meta
    * Answers
        * NaN
        * NaNNaN
        * NaNNaNNaN
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

var f = function (a) {
    if (a == null) {
        console.log("Hello");
    }
    if (a === null) {
        console.log("World");
    }
};
f();
```

1. meta
    * Answers
        * Hello
        * Hello World
        * World
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
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
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * ECMAScript 6
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
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end


```
What is printed to console.log?

console.log(Number("false") == Number(false));
```

1. meta
    * Answers
        * false
        * true
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

console.log(typeof String("abc") === typeof "abc");
```

1. meta
    * Answers
        * true
        * false
        * Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

console.log(typeof NaN === typeof Number);
```

1. meta
    * Answers
        * false
        * true
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What gets printed to console.log?

var Animal = function () {};
Animal.prototype.words = [];
Animal.prototype.memorize = function (word) {
    this.words.push(word);
};
Animal.prototype.speak = function () {
    return this.words.join(" ");
};
var cat = new Animal();
cat.memorize("meow");
cat.memorize("miew");
var dog = new Animal();
dog.memorize("woof");
var bird = new Animal();
console.log(bird.speak());
```

1. meta
    * Answers
        * meow miew woof
        * " "
        * undefined
        * meow miew
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What gets printed to console.log?

setTimeout(function () {
    console.log("Hello");
    setTimeout(arguments.callee, 100);
}, 100);
```

1. meta
    * Answers
        * Hello... (repeateding forever)
        * Hello
        * Hello then an Error is thrown
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * Asynchronous
2. meta end


```
What gets printed to console.log?

Function.prototype.memoize = function() {
    var self = this;
    var cache = {};
    return function () {
        var args = Array.prototype.slice.call(arguments);
        var argsKey = args.join("-");
        if (args in cache) {
            return cache[argsKey];
        } else {
            return cache[argsKey] = self.apply(self, args);
        }
    };
};
var f = function (a, b) {
    return a + b
};
var test = f.memoize();
test("4-2");
console.log(test(4 - 2));
```

1. meta
    * Answers
        * NaN
        * 2
        * "4-2"
        * Error is thrown
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What gets printed to console.log?

var o = {};
o[42] = 100;
o["42"] = 200;
console.log(o[42], o["42"]);
```

1. meta
    * Answers
        * 200 200
        * 100 200
        * undefined 200
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
Of the answers, which one is arguably the best reason this could _could_ cause an error?

var o = {
    100: "hello",
    "200": "world",
    test: "param",
};
```

1. meta
    * Answers
        * Trailing comma after 'test' parameter could break old IE browsers.
        * Using quotes on keys can break old IE browsers.
        * There isn't anything wrong with this code even in legacy browsers.
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * Browser
2. meta end


```
Of the answers, which one is arguably the best reasoning for why the following exists in code supporting old browsers?

node.onclick = function (e) {
    e = e || window.event;
    // ... other code here
};
```

1. meta
    * Answers
        * Older Internet Explorer browsers would not pass the event object directly.
        * Older Firefox browsers would not pass the event object directly.
        * By Internet Explorer 8 this code was no longer needed.
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * Browser
2. meta end


```
What gets printed to console.log?

var f = function () {
    return
    {
        n: 1000
    };
};
console.log(f().n);
```

1. meta
    * Answers
        * Error is thrown
        * 1000
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What gets printed to console.log?

var f = function (a, b, c) {};
console.log(f.name, f.length);
```

1. meta
    * Answers
        * "" 3
        * anonymous 3
        * undefined 3
        * f 3
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
2. meta end


```
What is printed to console.log?

Promise.race([new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
        resolve(1);
    } else {
        reject(3);
    }
}), Promise.reject(2)]).then(function (val) {
    console.log(val);
}).catch(function (val) {
    console.log(val);
});
```

1. meta
    * Answers
        * 1 or 3
        * 2
        * 1
        * udnefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * ECMAScript 6
        * Asynchronous
2. meta end


```
What is printed to console.log?

Promise.race([new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 100);
}), new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(42);
    }, 10);
})]).then(function (val) {
    console.log(val);
}).catch(function (val) {
    console.log(val);
});
```

1. meta
    * Answers
        * 42
        * 10
        * 100
        * udnefined
    * Time
        * 5 Minutes
    * Category
        * Practical
    * Level
        * Guru
    * Tags
        * JavaScript
        * ECMAScript 6
        * Asynchronous
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
        * Guru
    * Tags
        * JavaScript
        * ECMAScript 6
2. meta end
