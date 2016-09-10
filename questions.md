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



## Advanced - Functions



## Advanced - Scope



## Advanced - Standard



## Advanced - Types: Primitive and Native
