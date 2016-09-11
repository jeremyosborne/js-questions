# Advanced



## Advanced - Async


```
What is printed to console.log?

Promise.resolve({
    name: "Jane"
}).then(function (o) {
    o.job = "Heiress";
    return o;
}, function (o) {
    o.job = "Slob";
    return o;
}).then(function (o) {
    o.school = "Uni";
    return o;
}, function (o) {
    o.school = "Elementary";
    return o;
}).then(function (o) {
    console.log(o.name, o.job, o.school);
}, function (o) {
    console.log(o.name, o.job, o.school);
});
```

1. meta
    * Answers
        * Jane Heiress Uni
        * Jane Heiress Elementary
        * Jane Slob Uni
        * Jane Slob Elementary
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

Promise.reject({
    name: "Jane"
}).then(function (o) {
    o.job = "Heiress";
    return o;
}, function (o) {
    o.job = "Slob";
    return o;
}).then(function (o) {
    o.school = "Uni";
    return o;
}, function (o) {
    o.school = "Elementary";
    return o;
}).then(function (o) {
    console.log(o.name, o.job, o.school);
}, function (o) {
    console.log(o.name, o.job, o.school);
});
```

1. meta
    * Answers
        * Jane Slob Uni
        * Jane Heiress Uni
        * Jane Heiress Elementary
        * Jane Slob Elementary
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

Promise.reject({
    name: "Jane"
}).then(function (o) {
    o.job = "Heiress";
    return o;
}, function (o) {
    o.job = "Slob";
    return Promise.reject(o);
}).then(function (o) {
    o.school = "Uni";
    return o;
}, function (o) {
    o.school = "Elementary";
    return o;
}).then(function (o) {
    console.log(o.name, o.job, o.school);
}, function (o) {
    console.log(o.name, o.job, o.school);
});
```

1. meta
    * Answers
        * Jane Slob Elementary
        * Jane Slob Uni
        * Jane Heiress Uni
        * Jane Heiress Elementary
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

Promise.resolve({
    name: "Jane"
}).then(function (o) {
    o.job = "Heiress";
    return Promise.reject(o);
}).then(function (o) {
    o.school = "Uni";
    return o;
}).then(function(o) {
    o.pet = "Fido";
}).catch(function(o) {
    return o;
}).then(function (o) {
    console.log(o.name, o.job, o.school, o.pet);
}, function (o) {
    console.log(o.name, o.job);
});
```

1. meta
    * Answers
        * Jane Heiress undefined undefined
        * Jane Heiress Uni Fido
        * Jane Heiress Uni undefined
        * Jane Heiress
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

Promise.resolve({
    name: "Jane"
}).then(function (o) {
    o.job = "Heiress";
    return Promise.reject(o);
}).then(function (o) {
    o.school = "Uni";
    return o;
}).then(function(o) {
    o.pet = "Fido";
    return o;
}).catch(function(o) {
    throw o;
}).then(function (o) {
    console.log(o.name, o.job, o.school, o.pet);
}, function (o) {
    console.log(o.name, o.job);
});
```

1. meta
    * Answers
        * Jane Heiress
        * Jane Heiress undefined undefined
        * Jane Heiress Uni Fido
        * Jane Heiress Uni undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

var p = Promise.resolve({
    name: "Jane"
}).then(function (o) {
    o = o || {}
    o.job = "Heiress";
}).then(function (o) {
    o = o || {}
    o.school = "Uni";
}).then(function (o) {
    o = o || {};
    console.log(o.name, o.job, o.school);
});
```

1. meta
    * Answers
        * undefined undefined undefined
        * Jane Heiress undefined
        * Jane Heiress Uni
        * Jane undefined undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

var p = Promise.resolve({
    name: "Jane"
});

p.then(function (o) {
    o = o || {}
    o.job = "Heiress";
});

p.then(function (o) {
    o = o || {}
    o.school = "Uni";
});

p.then(function (o) {
    o = o || {};
    console.log(o.name, o.job, o.school);
});
```

1. meta
    * Answers
        * Jane Heiress Uni
        * undefined undefined undefined
        * Jane Heiress undefined
        * Jane undefined undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end


```
What is printed to console.log?

var janeGenerator = function () {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resolve({
                    name: "Jane"
                })
            } else {
                reject({
                    name: "Jane"
                })
            }
        }, 1000);
    });
    return p;
};

janeGenerator().then(function (o) {
    o.job = "CEO";
    return o;
}, function (o) {
    o.job = "VP";
    return o;
}).then(function (o) {
    o.house = "Big";
    return o;
}).then(function (o) {
    console.log(o.name, o.job, o.house);
}).catch(function (o) {
    console.log(o.name, o.job);
});
```

1. meta
    * Answers
        * Jane CEO Big or Jane VP Big
        * Jane CEO or Jane VP
        * Jane undefined
        * Jane CEO undefined or Jane VP undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * ECMAScript 6
        * Promises
2. meta end



## Advanced - Browser



```
Assuming operation in a browser, a standardized and dev friendly API, and a click is made to `#button` in the HTML, what is printed to console.log?

<html>
    <head>
        <title>Example<title>
    </head>
    <body>
        <div>
            <button id="button">Click</button>
        </div>
    <script>
document.body.addEventListener("click", function(e) {
    console.log(e.target.tagName);
});
    </script>
    </body>
</html>    
```

1. meta
    * Answers
        * BUTTON
        * DIV
        * BODY
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * Browser
2. meta end


```
Assuming operation in a browser, a standardized and dev friendly API, and a click is made to `#button` in the HTML, what is printed to console.log?

<html>
    <head>
        <title>Example<title>
    </head>
    <body>
        <div>
            <button id="button">Click</button>
        </div>
    <script>
document.body.addEventListener("click", function (e) {
    console.log(e.target.tagName);
});
document.querySelector("#button").addEventListener("click", function (e) {
    e.stopPropagation();
    console.log(e.target.tagName);
});
    </script>
    </body>
</html>    
```

1. meta
    * Answers
        * BUTTON
        * BUTTON BUTTON
        * BUTTON BODY
        * undefined
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * Browser
2. meta end


```
Assuming operation in a browser, a standardized and dev friendly API, and a click is made to `#button` in the HTML, what will happen?

<html>
    <head>
        <title>Example<title>
    </head>
    <body>
        <div>
            <button id="button">Click</button>
        </div>
    <script>
document.body.addEventListener("click", function (e) {
    var parent = e.target.parentNode;
    parent.removeChild(e.target);
    parent.innerHTML = "Something";
    var el = document.createElement("div");
    el.innerHTML = "Something else";
    parent.parentNode.insertBefore(el, parent.parentNode.firstChild);
});
    </script>
    </body>
</html>    
```

1. meta
    * Answers
        * The button will be removed and the page will say "Something Else" followed by "Something".
        * The button will be removed and the page will say "Something" followed by "Something Else".
        * The page will have a "Click" button and will say "Something Else" followed by "Something".
        * The page will have a "Click" button and will say "Something" followed by "Something Else".
    * Time
        * 2 Minutes
    * Category
        * Practical
    * Level
        * Advanced
    * Tags
        * JavaScript
        * Browser
2. meta end



## Advanced - ECMAScript 6



```
What is printed to console.log?

class Animal {
    constructor(name) {
        this.name = name || "Frida";
    }
    speak() {
        return this.name;
    }
}
class Cat extends Animal {
    speak() {
        return super.speak() + " says meow!";
    }
}
var k = new Cat("Khalo");
console.log(k.speak());
```

1. meta
    * Answers
        * Kahlo says meow!
        * Frida says meow!
        * undefined says meow!
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

class Animal {
    constructor(name) {
        this.name = name || "Frida";
    }
    speak() {
        return this.name;
    }
}
class Cat extends Animal {
    speak() {
        return super.speak() + " says meow!";
    }
}
var k = new Cat("Khalo");
k.speak = function () {
    return super.speak() + " says woof!";
};
console.log(k.speak());
```

1. meta
    * Answers
        * Error is thrown
        * Kahlo says meow!
        * Kahlo says woof!
        * Frida says woof!
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

class Animal {
    constructor(name) {
        this.name = name || "Frida";
    }
    speak() {
        return this.name;
    }
}
class Cat extends Animal {
    speak() {
        return super.speak() + " says meow!";
    }
}
Cat.prototype.speak = function () {
    return Animal.prototype.speak.call(this) + " says woof!";
};
var k = new Cat("Khalo");
console.log(k.speak());
```

1. meta
    * Answers
        * Kahlo says woof!
        * Kahlo says meow!
        * Frida says woof!
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

class Animal {
    constructor(name) {
        this.name = name || "Frida";
    }
    speak() {
        return this.name;
    }
}
class Cat extends Animal {
    speak() {
        return super.speak() + " says meow!";
    }
}
class ThunderCat extends Cat {
    speak() {
        return super.speak() + " says THUNDER THUNDER THUNDER!";
    }
}
var k = new ThunderCat("Khalo");
console.log(k.speak());
```

1. meta
    * Answers
        * Khalo says meow! says THUNDER THUNDER THUNDER!
        * Kahlo says meow!
        * Kahlo says THUNDER THUNDER THUNDER!
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

class Animal {
    constructor(name) {
        this.name = name || "Frida";
    }
    speak() {
        return this.name;
    }
}
class Cat extends Animal {
    speak() {
        return super.speak() + " says meow!";
    }
}
class ThunderCat extends Cat {
    speak() {
        return super.speak() + " says THUNDER THUNDER THUNDER!";
    }
}
var k = new ThunderCat("Khalo");
console.log(k instanceof ThunderCat,
    k instanceof Cat,
    k instanceof Animal,
    k instanceof Object,
    k instanceof Function);
```

1. meta
    * Answers
        * true true true true false
        * true true true true true
        * true false false false false
        * true false false true false
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

class Animal {
    constructor(name) {
        this[Symbol("name")] = name || "Frida";
    }
    speak() {
        return this[Symbol("name")];
    }
}
var a = new Animal("Dali");
console.log(a.speak());
```

1. meta
    * Answers
        * undefined
        * Frida
        * Dali
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

class Animal {
    constructor(name) {
        this._name = Symbol("name");
        this[this._name] = name || "Frida";
    }
    speak() {
        return this[this._name];
    }
}
var a = new Animal("Dali");
console.log(a.speak(), a[Symbol("name")]);
```

1. meta
    * Answers
        * Dali undefined
        * Frida undefined
        * undefined undefined
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


## Advanced - Functions



```
What is printed to console.log?

var sum = function () {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (a, b) {
        return a + b;
    }, 0);
};
var a = sum.bind(null, 1, 2, 3);
var b = sum.bind(null, 2, 4, 6);
console.log(a(1, 2, 3) + b(2, 4, 6));
```

1. meta
    * Answers
        * 36
        * 18
        * 12 24
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

var f = function (a) {
    return a;
};
var g = f.bind(null, 2);
var h = g.bind(null, 4);
console.log(f(1), g(1), h(1));
```

1. meta
    * Answers
        * 1 2 2
        * 1 2 4
        * 1 1 1
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

var storage = function () {
    var cache = {};
    return {
        get: function (key) {
            return cache[key];
        },
        set: function (key, val) {
            cache[key] = val;
        }
    };
};
var s = storage();
s.cache = {
    name: "Florence"
};
s.set("name", "Katie");
console.log(s.get("name"));
```

1. meta
    * Answers
        * Katie
        * Florence
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

var storage = function () {
    var cache = {};
    return {
        get: function (key) {
            return cache[key];
        },
        set: function (key, val) {
            cache[key] = val;
        }
    };
};
var s = storage();
s.cache = {
    name: "Florence"
};
s.get = function (key) {
    return this.cache[key];
};
s.set("name", "Katie");
console.log(s.get("name"));
```

1. meta
    * Answers
        * Florence
        * Katie
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

var storage = function () {
    var cache = {
        name: "Florence"
    };
    return {
        get: function (key) {
            return cache[key];
        },
        getterProxy: function (f) {
            return f(cache);
        },
        set: function (key, val) {
            cache[key] = val;
        }
    };
};
var s = storage();
s.set("name", "Katie");
var f = function () {
    return cache[name];
};
var name = s.getterProxy(f);
console.log(name);
```

1. meta
    * Answers
        * Error is thrown
        * Florence
        * Katie
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


## Advanced - Scope



## Advanced - Standard



## Advanced - Types: Primitive and Native



```
What is printed to console.log?

var Animal = function (name) {
    this.name = name || "Xiao";
};
Animal.prototype.name = "Animal";

var Cat = function (name) {
    this.name = name || "Gato";
};
Cat.prototype = new Animal();
Cat.prototype.name = "Cat";

var c = new Cat("Hans");
delete c.name;
console.log(c.name);
```

1. meta
    * Answers
        * Cat
        * Gato
        * Hans
        * Animal
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
    this.name = name || "Xiao";
};
Animal.prototype.name = "Animal";

var Cat = function (name) {
    this.name = name || "Gato";
};
Cat.prototype = new Animal();
Cat.prototype.name = "Cat";

var c = new Cat("Hans");
delete c.name;
delete Cat.prototype.name
console.log(c.name);
```

1. meta
    * Answers
        * Animal
        * Cat
        * Gato
        * Hans
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
    this.name = name || "Xiao";
};

var Cat = function (name) {
    this.name = name || "Gato";
};
Cat.prototype = new Animal();

var c = new Cat("Hans");
delete c.name;
console.log(c.name);
```

1. meta
    * Answers
        * Xiao
        * Gato
        * Hans
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
