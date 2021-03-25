# Closure

## Post lecture evaluation

---

&nbsp;

### Task 1

Consider the following snippet below:

```js
function funcMaker() {
  return function () {
    return 42;
  };
}

const getMeaningOfLife = funcMaker();
const meaningOfLife = getMeaningOfLife();
```

Answer the following questions precisely:

a) What is the **return value** of `funcMaker` ( why ? )

As the name suggests, `funcMaker` is used to create a function, when it is **invoked** its return value will be Function (anonymous)

b) What is the **return value** of `getMeaningOfLife` ( why ? )

When `getMeaningOfLife` is declared its value becomes the return value of funcMaker, we know this to be an anonymous function (or the "inner function" from `funcMaker`). When `getMeaningOfLife` is invoked it is the same as invoking the inner function from `funcMaker`, its return value will be 42.

Confusion here may arise from assuming we want to **console.log**(getMeaningOfLife) <-- no invocation. Since we're asked about the **return value** we know we're interested in the value when it is called.

---

&nbsp;

### Task 2 - advanced

```js
function createBinaryMimic(funcToMimic) {
  function newMimic(a, b) {
    return funcToMimic(a, b);
  }
  return newMimic;
}

function add(x, y) {
  return x + y;
}

const mimicAdd = createBinaryMimic(add);
const result = mimicAdd(100, 50);
```

Try answering the small pot-pourri of questions below, they are designed to make you think very carefully so try using precision when answering them.

- What is the **return value** of `createBinaryMimic` ?

  Like the previous example `createBinaryMimic` returns a function. UNLIKE the previous example, here this function is named, so it returns a newMimic function.

- What is the **argument** to `createBinaryMimic` ?

  An argument is the _actual_ value that is passed to a function, in this example the only time `createBinaryMimic` is called is when `mimicAdd` is declared, therefore its argument is `add`.

- What is the **parameter** of createBinaryMimic ?

  The paramater can be considered a _placeholder_ in this example the parameter is assigned when the function is declared, so `createBinaryMimic`'s parameter is the `funcToMimic` variable.
  And because it follows good naming convention we know the value of this variable is going to be a function.

- What is the **return value** of `newMimic` ?

  The return value of `newMimic` is the invoked function that is passed as an arguement to `createBinaryMimic`, in this example it is the returned value of `add`.

- What is the other name for the function `mimicAdd` ?

  When `mimicAdd` is declared its value is assigned as the return value of createBinaryMimic, which is the newMimic function.

- Which variable is held in the **closed over variable environment** that `newMimic` can still reference after the execution context for `createBinaryMimic` has closed.

  `newMimic` holds onto `funcToMimic` in its COVE, this makes it possible for `newMimic` to call the `funcToMimic` when it is invoked.

---

&nbsp;

### Task 3 - more advanced (optional)

```js
function createListTraverser(list) {
  let index = 0;
  function listTraverser() {
    const currentElement = list[index];
    index += 1;
    index %= list.length;
    return currentElement;
  }
  return listTraverser;
}

const listTraverser = createListTraverser(["a", "b", "c"]);
console.log(listTraverser());
console.log(listTraverser());
console.log(listTraverser());
console.log(listTraverser());
console.log(listTraverser());
```

What the will console output look like in the above snippet of code ? Think carefully about how you can break down the code to work out your answers. In each invocation of `listTraverser` a diagram might prove useful in trying to work out exactly what is going on.

`listTraverser` is able to increase the value of `index`, and more imporantly hold this value by retaining it in its COVE. Each invocation will increase `index`, and output a different letter. resulting in an output of `a b c a b`

When `index` reaches the same value of `list.length` the use of the modulo oprerator `%` allows it to be reassigned to zero (3 % 3 = 0), without this line of code `index` would continually increase rather than resetting and the output would be `a b c undefined undefined`

---
