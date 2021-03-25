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

a) What is the **return value** of `funcMaker` ( func)

b) What is the **return value** of `getMeaningOfLife` ( 42)

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

- What is the **return value** of `createBinaryMimic` ? --> a function

- What is the **argument** to `createBinaryMimic` ? - > add function

- What is the **parameter** of createBinaryMimic ? - >

- What is the **return value** of `newMimic` ?

- What is the other name for the function `mimicAdd` ?

- Which variable is held in the **closed over variable environment** that `newMimic` can still reference after the execution context for `createBinaryMimic` has closed.

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

---
