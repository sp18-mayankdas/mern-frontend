# Day-01

## What is HTML?

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

Explanation of whole HTML code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Explanation:

- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
- The `<html>` element is the root element of an HTML page
- The `<head>` element contains meta information about the HTML page
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading
- The `<p>` element defines a paragraph

- Who invented HTML? ==>Tim Berners-Lee

# HTML Styles:

- The HTML style attribute is used to add styles to an element, such as color, font, size, and more.

  Syntax:
  `javascript
      <tagname style="property:value;">`

  Example:

```html
<h1 style="background-color: red;">My first heading</h1>
<p style="background-color: yellow; font-size: 40px;">My first paragraph</p>
```

---

# Text Color:

```html
<h1 style="color:red;">Text color</h1>
```

---

Fonts:

# Font Family:

- The CSS font-family property defines the font to be used for an HTML element:

Example:

```html
<p style="font-family: Verdana, Geneva, Tahoma, sans-serif">
  Font family: Verdana
</p>

<p style="font-family: 'Times New Roman', Times, serif">
  Font family: Times New Roman
</p>
```

# Text-Size

- The CSS font-size property defines the text size for an HTML element:

Example:

    ```html
    <p style="font-size:100px">Font Size: 30px</p>
    ```

# Text-Alignment

- The CSS text-align property defines the horizontal text alignment for an HTML element:

Example:

    ```html
    <p style="text-align: center">Text-Align: Center</p>
    ```

---

Chapter Summary:

- Use the style attribute for styling HTML elements
- Use background-color for background color
- Use color for text colors
- Use font-family for text fonts
- Use font-size for text sizes
- Use text-align for text alignment

---

# Html Text Formatting

Formatting elements were designed to display special types of text:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text

# Difference between Bold and Strong Tag?

- Both gives visual output same, but bold tag is a physical tag & strong tag is a logical tag.Basically when bold tag is used, it only makes the words thicker... But when strong tag is used, it makes the word thicker & also tells the Browser that the text inside "strong" tag is important. & as per the tag the words inside the strong tags are loaded first & accurate.

# Difference between <i> and <em> tag?

- The `<i>` tag in HTML is used to display text in italics. It is generally used for stylistic purposes, such as denoting a different mood, voice, or foreign word, without adding any semantic emphasis to the content.

- The `<em>` tag in HTML is used to emphasize text, typically displayed in italics. It conveys semantic meaning, indicating that the emphasized text is important, which can also aid accessibility tools like screen readers in highlighting key content.

# Html Quotations and Citation Elements

- Here , we will go through the `<blockquote>`, `<q>` , `<abbr>`, `<addresss>` , `<cite>` and `<bdo>` Html Elements.

- BlockQuote: Defines a section that is quoted from another Source.

- `<blockquote>` - So this elements defines a section that is quoted from another source. Browsers usually indent blockquote elements.

- `<q>` - q defines a short quotation. It kinda adds apostrophe ..

- `<abbr>` - abbr tag defines an abbreviation or an acronym like HTML , CSS or like World health organisation for WHO.

- `<address>` - This tag defines the contact info , for the author or owner of a document or article. This contact info can be email , phone number , url , physical address , social media handle , etc. The text in the address usually returns in italic , and browsers will add a line break after and before the address element.

# HTML COMMENTS

HTML comments are used to hide any inline or any content whcih you dont want to show or need to use as a , they are not displayed on thwe brwoser and they can help document your htmls source code.

Syntax:

<!-- Write your comments here -->

# Day-02

# HTML COLORS

HTML colors are specified with predefined colors like rgb , rgba ,hsla , hsl , hex values.

syntax of all the colors:

RGB COLOR: rgb(255, 99, 71)
HEX COLOR: #ff6347
HSL COLOR: hsl(9, 100%, 64%)
RGBA COLOR: rgba(255, 99, 71, 0.5)
HSLA COLOR: hsla(9, 100%, 64%, 0.5)

- IN HSL , WE HAVE HUE , SAURATION AND LIGHTNESS.

- Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

- Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.

- Lightness is also a percentage value. 0% is black, and 100% is white.

- IN RGB, WE HAVE THE COLOR RANGING FROM 0 TO 255. (256 x 256 x 256 = 16777216 possible colors! )

- IN HEX COLOR: #rrggbb Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

- IN RGBA OR HSLA , WE HAVE AN EXTRA VALUE THAT REPRESENTS THE ALPHA VALUE OR HOW MUCH OPACITY SHOULD BE THERE. ITS VALUE IS BETWEEN 0 TO 1.

- WE CAN SET THE TEXT COLOR , BACKGROUND COLOR , BORDER COLOR .

# Day-03

# JavaScript

**_ Array _**

- toString does not take any arguments and if we try to console log toString() method, we get ==> [object Undefined]

- Arrays are a special type of objects and internally the elements of arrays gets stored as a key value pair , similar manner to the objects.

- typeof(array) ==> returns an object.

- Arrays variables can be objects. because arrays are special type of objects, we can have objects in an array , functions in an array , and also arrays in an array.

# Day-04

**_Array Methods_**

# pop()

    - removes the last element from an array.
    - Returns the value that's popped out.

# push()

    - Need to have a  value to be pushed
    - adds a new element to an array at the end.
    - And , returns the new array length.

# shift()

    - Removes the first array element and shifts all other elements to a lower index.
    - Returns the value that was shifted out.

# Unshift()

- Adds a new element to an array at beginning and unshifts older elements.
- Returns new array length.

# Slice(start , ending)

- The start and ending positions are optional.
- It slices out a piece of an array into a new array.
- Creates a new array.
- Does not remove any elements from source array (or Original array).
- whatever index you give , it slices out a part of an array starting from array element at that index position.
- If we put starting as well as the last position,

```javascript
array.slice(2, 4)
```

- from 2nd position till this position (ie., 4) excluding this index

  - Start position => Inclusive
  - Last Value => Exclusive

# Splice(starting index , DeleteCounts , ...items)

- Used to add new items to an array
- StartPositions: tells from which index or from which position we need position we need to delete the elements.
- DeleteCounts: how many elements can we delete
- ...items: dd elements into the array at that position.

```javascript
// Example:
const array = [10, 20, 30, 40, 50]

array.splice(3, 1, 80, "90", true)
```

- means at 3rd index , remove 1 element and at that position add 80 , "90" and true.

- Output array: [10 , 20 , 30 , 80 , "90" , true];
- Splice method returns the deleted element.
- And , Splice method modifies or operates on original array.

# Day-05

# Objects

- Objects are non-primitive datatypes and also known as reference types.
- Objects are a collection of key-value pairs.
- Objects are of three types:
  - Object Literal
  - functions
  - Arrays
- If we have 2 objects having same data, they will not be equal to each other coz they are stored in different memory locations.
  ```javascript
  const obj1 = { name: "John", age: 30 }
  const obj2 = { name: "John", age: 30 }
  ```
- So , console.log(obj1 === obj2) will return false because the objects are reference types and we dont compare the value , we compare the address.

- But if we have 2 objects having same reference, they will be equal to each other coz they are stored in same memory locations.

- So , console.log(obj1 === obj2) will return true , for
  ```javascript
  const obj1 = { name: "John", age: 30 }
  const obj2 = obj1
  ```
- In this case , we directly assigned obj1 to obj2, so both are pointing to same memory location.so eve if we will make any changes in obj2, it will also reflect in obj1.

- To access the prperties of an object, we can use either dot notation or bracket notation.
- Dot notation: obj1.name
- Bracket notation: obj1["name"] ==> keys of objects are always strings internally, so we can use bracket notation to access the properties of an object.
- If we have any space or any special character in the key, we have to use bracket notation to access the property of an object , and the keys must be written in strings inside brackets.
- If we try to access the property which is not in the object, it will return undefined.
- We can write any valid javascript expression and variables inside the brackets to access the property of an object.

  ```javascript
  const myName = "mayank"
  const obj1 = { name: "John", age: 30, mayank: "developer" }
  console.log(obj1[myName]) // will return "developer" coz myName is a variable and it has the value "mayank" which is a key in the object obj1.
  ```

- We can also write expressions like this:

  ```javascript
  const obj1 = { fullName: "John" }
  console.log(obj1["full" + "Name"]) // will return "John"
  ```

- We can add or update any values inside objects

# Day-06

# JavaScript Loops

---

## Introduction to Loops

Loops are essential for executing a block of code multiple times, enabling repetitive tasks like processing arrays, manipulating DOM elements, or handling data. JavaScript offers several loop constructs, each suited to specific scenarios.

**Question**: Why are loops critical in programming? Can you think of a task that would be cumbersome without loops?

---

## The `for` Loop

### Overview

The `for` loop is ideal when you know the number of iterations in advance. It consists of three parts: initialization, condition, and update.

### Syntax

```javascript
for (initialization; condition; update) {
  // Code to execute
}
```

- **Initialization**: Sets the loop counter (e.g., `let i = 0`) and executes only one time before the execution of the code block.
- **Condition**: Evaluated before each iteration (e.g., `i < 5`) and defines the condition for executing the code block.
- **Update**: Executes after each iteration (e.g., `i++`) OR gets executed each time after the code block has been executed.

- All these three are optional.
- In Initialization, you can declare multiple variables separated by commas.

```javascript
for (let i = 0, len = car.length, text = ""; i < len; i++) {
  //Code.....
}
```

### Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i) // Outputs: 0, 1, 2, 3, 4
}
```

### Use Cases

- Iterating over arrays with indices.
- Performing a task a fixed number of times.

**Example**: Iterating an array:

```javascript
const arr = ["a", "b", "c"]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]) // Outputs: a, b, c
}
```

### When to Use

- Known iteration count (e.g., array length).
- Need precise control over the counter.

### When Not to Use

- Avoid for objects (use `for...in`).
- Avoid for iterables like strings or Sets when indices aren’t needed (use `for...of`).

**Question**: How does the `for` loop’s structure make it suitable for index-based iteration?

---

## The `for...in` Loop

### Overview

The `for...in` loop iterates over the **enumerable properties** of an object, returning property names (keys). Enumerable properties are those with the `enumerable` attribute set to `true`.

### Syntax

```javascript
for (let key in object) {
  // Code to execute
}
```

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 }
for (let key in obj) {
  console.log(key, obj[key]) // Outputs: a 1, b 2, c 3
}
```

### Use Cases

- Iterating over object properties.
- Counting or processing key-value pairs.

**Example**: Summing object values:

```javascript
const obj = { a: 10, b: 20, c: 30 }
let sum = 0
for (let key in obj) {
  sum += obj[key]
}
console.log(sum) // Outputs: 60
```

### When to Use

- When you need to access object keys dynamically.

### When Not to Use

- **Avoid for Arrays**: Iterates over enumerable properties, not just indices, and order isn’t guaranteed.
  ```javascript
  const arr = [1, 2, 3]
  arr.custom = "test"
  for (let i in arr) {
    console.log(i) // Outputs: 0, 1, 2, custom
  }
  ```

### Best Practices

- Use `hasOwnProperty` to exclude inherited properties:
  ```javascript
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key])
    }
  }
  ```

**Question**: Why is `for...in` specific to objects? What issues arise if used with arrays?

---

## The `for...of` Loop

### Overview

The `for...of` loop iterates over the **values** of iterable objects (e.g., arrays, strings, Sets, Maps).

### Syntax

```javascript
for (let value of iterable) {
  // Code to execute
}
```

### Example

```javascript
const arr = ["x", "y", "z"]
for (let value of arr) {
  console.log(value) // Outputs: x, y, z
}
```

### Use Cases

- Iterating over arrays, strings, Sets, or Maps when you need values.
- Processing unique values in a Set.

**Example**: Iterating a string:

```javascript
for (let char of "hello") {
  console.log(char) // Outputs: h, e, l, l, o
}
```

### When to Use

- When you need values, not indices or keys.
- Works with any iterable (e.g., Sets, Maps).

### When Not to Use

- Not for plain objects (use `for...in` or `Object.keys/values/entries` with `for...of`).
  ```javascript
  const obj = { a: 1, b: 2 }
  for (let value of obj) {
    // Error: obj is not iterable
    console.log(value)
  }
  ```

### Best Practices

- Use with `entries()` for indices:
  ```javascript
  for (let [index, value] of arr.entries()) {
    console.log(`${index}: ${value}`)
  }
  ```

**Question**: How does `for...of` simplify iteration over arrays compared to `for`?

---

## The `forEach` Method

### Overview

The `forEach` method is a functional approach to iterating over arrays, executing a callback for each element. It’s not a traditional loop but a method on the `Array` prototype.

### Syntax

```javascript
array.forEach((element, index, array) => {
  // Code to execute
})
```

### Example

```javascript
const arr = ["a", "b", "c"]
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`) // Outputs: 0: a, 1: b, 2: c
})
```

### Use Cases

- Functional-style iteration over arrays.
- When you prefer a declarative approach over imperative loops.

### When to Use

- Simple array iteration without needing to break or continue.
- Modern, readable codebases.

### When Not to Use

- Cannot use `break` or `continue` (use `for` or `for...of` instead).
- Less flexible for complex control flows.

**Example**: Filtering with `forEach` (no `break`):

```javascript
arr.forEach((value) => {
  if (value === "b") return // Acts like continue
  console.log(value) // Outputs: a, c
})
```

**Question**: Why can’t `break` be used in `forEach`? How would you simulate it?

---

## The `while` Loop

### Overview

The `while` loop executes as long as a condition is `true`, ideal for unknown iteration counts.

### Syntax

```javascript
while (condition) {
  // Code to execute
}
```

### Example

```javascript
let i = 0
while (i < 5) {
  console.log(i) // Outputs: 0, 1, 2, 3, 4
  i++
}
```

### Use Cases

- Processing until a dynamic condition is met.
- Handling queues or user input.

**Example**: Processing a queue:

```javascript
const queue = [1, 2, 3]
while (queue.length > 0) {
  console.log(queue.shift()) // Outputs: 1, 2, 3
}
```

### When to Use

- Unknown number of iterations.
- Condition-driven tasks.

### When Not to Use

- Avoid when iteration count is known (use `for`).
- Be cautious to avoid infinite loops.

**Question**: How does `while` differ from `for` in flexibility and readability?

---

## The `do...while` Loop

### Overview

The `do...while` loop executes the body at least once before checking the condition.

### Syntax

```javascript
do {
  // Code to execute
} while (condition)
```

### Example

```javascript
let i = 0
do {
  console.log(i) // Outputs: 0, 1, 2, 3, 4
  i++
} while (i < 5)
```

### Use Cases

- When at least one iteration is required.
- Prompting for valid input.

**Example**: Prompting until valid:

```javascript
let input
do {
  input = prompt("Enter a number:")
} while (isNaN(input))
console.log(Number(input))
```

### When to Use

- Guaranteed first iteration needed.

### When Not to Use

- Avoid when the loop might not need to run at all (use `while`).

**Question**: Why is the guaranteed first iteration of `do...while` useful?

---

# Day-07

## Nested Loops

### Overview

Nested loops involve one loop inside another, often used for multi-dimensional data like matrices.

### Example

```javascript
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j) // Outputs: 0 0, 0 1, 1 0, 1 1
  }
}
```

### Use Cases

- Processing grids or matrices.
- Comparing pairs of elements.

### Best Practices

- Keep nesting shallow to maintain readability.
- Use labeled loops for complex control flows.

**Question**: How can nested loops become hard to read? How would you refactor them?

---

## `break` and `continue` Statements

### Overview

- **`break`**: Terminates the loop or `switch` statement, exiting to the next statement.
- **`continue`**: Skips the rest of the current iteration and proceeds to the next.

### Examples

**`break`**:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break
  console.log(i) // Outputs: 0, 1, 2
}
```

**`continue`**:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) continue
  console.log(i) // Outputs: 0, 1, 2, 4
}
```

### Advanced: Labeled Statements

Use labels to control outer loops:

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop
    console.log(i, j) // Outputs: 0 0, 0 1, 0 2, 1 0
  }
}
```

**`continue` with Label**:

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue outerLoop;
        console.log(i, j); // Outputs: 0 0, 0 1, 0 2, 1 0, 1 2, 2 0, 2 1, 2 2
}
```

### Use Cases

- **`break`**: Early termination (e.g., finding an item).
- **`continue`**: Skipping invalid data (e.g., negative numbers).

### In `switch` Statements

`break` prevents fall-through in `switch`:

```javascript
let day = 1
switch (day) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
}
```

**Question**: How do `break` and `continue` enhance control in loops?

---

## Looping Over Arrays and Objects

### Arrays

- Use `for` for index-based iteration.
- Use `for...of` for value-based iteration.
- Use `forEach` for functional iteration.

**Example**:

```javascript
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]) // Index-based
}
for (let value of arr) {
  console.log(value) // Value-based
}
arr.forEach((value) => console.log(value)) // Functional
```

### Objects

- Use `for...in` for enumerable properties.
- Use `for...of` with `Object.keys/values/entries` for iterable access.

**Example**:

```javascript
const obj = { a: 1, b: 2 }
for (let key in obj) {
  console.log(key, obj[key])
}
for (let value of Object.values(obj)) {
  console.log(value) // Outputs: 1, 2
}
```

### Why Avoid `for` for Objects

- No `length` property, requires `Object.keys()`.
- Less readable than `for...in`.

**Example**:

```javascript
const keys = Object.keys(obj)
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], obj[keys[i]]) // Cumbersome
}
```

### Why Avoid `for` for Iterables Without Indices

- Unnecessary index management.
- Inefficient for Sets/Maps (requires array conversion).

**Question**: Why is `for...of` more natural for Sets than `for`?

---

## Best Practices

1. **Choose the Right Loop**:

   - `for`: Known iterations, index needed.
   - `for...in`: Object properties.
   - `for...of`: Iterable values.
   - `forEach`: Functional array iteration.
   - `while`: Unknown iterations.
   - `do...while`: At least one iteration.

2. **Avoid Infinite Loops**:

   - Ensure condition updates (e.g., increment in `while`).

   ```javascript
   let i = 0
   while (i < 5) {
     i++ // Prevent infinite loop
   }
   ```

3. **Use `hasOwnProperty` in `for...in`**:

   ```javascript
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       console.log(key)
     }
   }
   ```

4. **Use `break` and `continue` Sparingly**:

   - Prefer array methods (`filter`, `find`) for readability.

5. **Handle Async in Loops**:
   - Use `let` for block scoping in async loops:
     ```javascript
     for (let i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1000) // Outputs: 0, 1, 2
     }
     ```

**Question**: How do you decide which loop to use for a given task?

---

## Edge Cases and Tricky Scenarios

1. **Infinite Loops**:

   ```javascript
   let i = 0
   while (i < 5) {
     console.log(i) // Infinite if i++ is missing
   }
   ```

2. **Modifying Iterables**:

   ```javascript
   let arr = [1, 2, 3]
   for (let i = 0; i < arr.length; i++) {
     arr.push(4) // Infinite loop
   }
   ```

3. **Async Loop with `var`**:

   ```javascript
   for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 1000) // Outputs: 3, 3, 3
   }
   ```

   _Fix with IIFE_:

   ```javascript
   for (var i = 0; i < 3; i++) {
     ;(function (i) {
       setTimeout(() => console.log(i), 1000) // Outputs: 0, 1, 2
     })(i)
   }
   ```

4. **Non-Enumerable Properties**:

   ```javascript
   const obj = { a: 1 }
   Object.defineProperty(obj, "b", { value: 2, enumerable: false })
   for (let key in obj) {
     console.log(key) // Outputs: a
   }
   ```

5. **`break` in Labeled Blocks**:
   ```javascript
   myBlock: {
     console.log("Start")
     break myBlock
     console.log("End") // Skipped
   }
   ```

** Question**: How can you avoid common pitfalls like infinite loops or async scoping issues?

---

## Tricky Questions

1. **Why does this log `3, 3, 3` with `var` but `0, 1, 2` with `let`?**

   ```javascript
   for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 1000)
   }
   ```

   _Answer_: `var` is function-scoped, so all callbacks share the same `i`, which is `3` after the loop. `let` is block-scoped, creating a new `i` per iteration.

2. **What’s the output of this nested loop?**

   ```javascript
   for (let i = 0; i < 2; i++) {
     for (let j = 0; j < 2; j++) {
       console.log(i, j)
     }
   }
   ```

   _Answer_: `0 0, 0 1, 1 0, 1 1`

3. **What happens if you modify an array during iteration?**

   ```javascript
   const arr = [1, 2, 3]
   for (let i = 0; i < arr.length; i++) {
     arr.splice(i, 1)
     console.log(arr[i])
   }
   ```

   _Answer_: Outputs `2, undefined` due to shifting indices. Use a copy or iterate backward.

4. **What’s the output with labeled `continue`?**

   ```javascript
   outer: for (let i = 0; i < 2; i++) {
     for (let j = 0; j < 2; j++) {
       if (j === 1) continue outer
       console.log(i, j)
     }
   }
   ```

   _Answer_: `0 0, 1 0`

5. **Can `break` be used in `forEach`?**
   _Answer_: No, causes `SyntaxError`. Use `some` or `for...of`:
   ```javascript
   ;[1, 2, 3].some((num) => {
     if (num === 2) return true
     console.log(num) // Outputs: 1
     return false
   })
   ```

# Day-08

### Browser Object Model

- Browser object model gives us the functions and properties using which we can manipulate our browser(like reload , resizing , redirecting or open url's , scrolling) using javascript.
- BOM allows JS to `talk or interact to browser`.
- Browser gives us the window object.
- We can access all the methods and properties of window object without mentioning the window.

## Properties of Window Object:

- `window.innerWidth`: Returns the width of the browser window's viewport excluding the window's chrome (toolbars, scrollbars, etc.) .
- `window.innerHeight`: Returns the height of the browser window's viewport excluding the window's chrome (toolbars, scrollbars, etc.) .
- `window.outerWidth`: Returns the width of the browser window including the window's chrome (toolbars, scrollbars, etc.).
- `window.outerHeight`: Returns the height of the browser window including the window's chrome.
- `window.location`: The location object represents the URL of the current webpage and allows you to access or modify parts of the URL, like the hostname, pathname, or query string.
  - `location.href`: Returns the full URL of the current page and takes you to that url.
  - `location.reload()`: Reloads the current page.
- `winow.history`: The history object manages the browser’s session history—the list of pages the user has visited in the current tab or window. Returns the history object of the browser window, which allows navigation through the user's browsing history.

  - `history.back()`: Goes back to the previous page in the history.
  - `history.forward()`: Goes forward to the next page in the history.
  - `history.go(n)`: - Moves forward (positive n) or backward (negative n) in the history.
    - `n`: The number of pages to move in the history. For example, `history.go(-1)` goes back one page, while `history.go(1)` goes forward one page.
  - `history.go(0)`: Reloads the current page.

- `window.open(url, name, features)`: Opens a new browser window or tab with the specified URL and returns reference to it. It opens the menitoned url in a new window or new tab

  - `url`: The URL to load in the new window.
  - `name`: The name of the new window or tab.
  - `features`: A string specifying the features of the new window (e.g., size, position).

- `window.close()`: Closes the current browser window or tab which was opened by `window.open()`. It cannot close the current window or tab if it was not opened by `window.open()`.

- `window.resizeTo(width, height)`: Resizes the current browser window to the specified width and height.
- `window.resizeBy(deltaWidth, deltaHeight)`: Changes the window size by a relative amount (increases or decreases width and height).

```javascript
window.resizeBy(100, 100) // Increases window size by 100x100 pixels
window.resizeTo(500, 400) // Sets window size to 500x400 pixels
```

- `window.moveTo(x, y)`: Moves the current browser window to the specified coordinates on the screen.
- `window.moveBy(deltaX, deltaY)`: Moves the current browser window by a relative amount (increases or decreases x and y coordinates).

```javascript
window.moveBy(50, 50) // Moves the window 50 pixels right and 50 pixels down
window.moveTo(100, 100) // Moves the window to position (100, 100)
```

- `window.scrollTo(x, y)`: Scrolls the current page to the specified coordinates.
- `scroll(x, y) or scrollTo(x, y)`: Scrolls the window to a specific position (x, y) in pixels from the top-left corner.
- Both scroll and scrollTo behave the same in modern browsers, but scrollTo also supports additional options like smooth scrolling.

```JavaScript

```
