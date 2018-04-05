<!-- head -->
== Object


`Object()` is a constructor that creates objects, for example:

```
const o = new Object();
```

This is the same as using the *object literal*:

```
const o = {}; // much more common
```

You can pass any argument to the constructor and it will try to guess the type of the argument and use a more appropriate constructor. For example, passing a string to `new Object()` will be the same as using the `new String()` constructor. This is hardly useful, as it is better to be explicit, but still possible.

```
const o = new Object('something');
o.constructor; //:: function String() { [native code] }
```

```
const o = new Object(123);
o.constructor; // :: function Number() { [native code] }
```

<!-- foot -->