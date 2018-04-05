<!-- head -->
== Array.prototype.length


The `length` property tells you how many elements are in the array.

```
[1, 2, 3, 4].length; //:: 4
```

You can also set this property which either allocates room in the array (same as `new Array(integer)`) or chops off elements from the end.


```
// new array
const a = [];

// how many elements? None
a.length; //:: 0

// make some room
a.length = 10;

// how many elements now?
a.length; //:: 10

// and they are all undefined
a[0]; // undefined
```

Now let's remove elements.

```
const a = [1,2,3,4,5];
a.length = 2;
a.toString(); //:: "1,2"

<!-- foot -->