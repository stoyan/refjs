<!-- head -->
== Array

The `Array` constructor creates array objects:

```
const arr = new Array(1, 2, 3);
```

This is the same as the *array literal*:

```
const another = [1, 2, 3]; // more common
```

When you pass only one numeric value to the Array constructor, it's assumed to be the array length. 

```
const un = new Array(3);
un.length; //:: 3
```

You get an array with the desired length and if you ask for the value of each of the array elements, you get `undefined`. 

```
un; //:: [undefined, undefined, undefined]
```

There is a subtle difference between an array full of elements and array that has length but no elements:

```
const arr = new Array(1, 2, 3);
const un = new Array(3);
'0' in arr; //:: true
'0' in un; //:: false
```

This difference in `Array()`'s behavior when you specify one vs. more parameters can lead to unexpected behavior. For example, the following use of the array literal is valid:

```
const a = [3.14];
a; //:: [3.14]
```

However, passing the floating-point number to the `Array` constructor is an error:

```
const a = new Array(3.14); //:: Range Error: invalid array length
```

<!-- foot -->