<!-- head -->
== Object.prototype

Any properties of `Object.prototype` are available to all objects. Let's take `toString()` for example. It exists as `Object.prototype.toString`:

```
Object.prototype.hasOwnProperty('toString'); //:: true
new Object().hasOwnProperty('toString'); //:: false
const o = {};
o.hasOwnProperty('toString'); //:: false
```

Even though `o` doesn't have an *own* property `toString` it can still use it, inherited from `o`'s constructor's (`new Object()`) prototype.

```
o.toString(); //:: "[object Object]"
```

Furthermore all objects, built-in or custom, inherit from `Object`. So the properties and methods of the `Object.prototype` are available to all types of objects. Consider:

```
class A {}
const a = new A(); // a custom object
o.hasOwnProperty('toString'); //:: false
a.toString(); //:: "[object Object]"
```

You can add properties to the `Object.prototype` and they will be inherited by all objects. This practice is questionable, but still possible.

```
const s = new String('noodles'); // can also be just `const s = 'noodles';`
Object.prototype.custom = 1;
s.custom; //:: 1
```
<!-- foot -->