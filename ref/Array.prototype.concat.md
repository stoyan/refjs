<!-- head -->
== Array.prototype.concat


`concat()` merges arrays together. You pass any number of arrays to it. Example:

```
const a = [1, 2];
const b = [3, 5];
const c = [7, 11];
const d = a.concat(b, c);
```

Neither the initial array `a`, nor the ones being added are changed in any way. The method returns the new array that is the combination of all others:

```
a; //:: Array [ 1, 2 ]
b; //:: Array [ 3, 5 ]
c; //:: Array [ 7, 11 ]
d; //:: Array [ 1, 2, 3, 5, 7, 11 ]
```

You can pass scalar values as well as arrays:

```
[].concat(1, 2, [3, 4], 'hi'); //:: Array [ 1, 2, 3, 4, "hi" ]
```
<!-- foot -->