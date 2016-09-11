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



## Advanced - Functions

```

```

1. meta
    * Answers
        *
        *
        *
        *
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
