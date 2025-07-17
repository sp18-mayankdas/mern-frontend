# Student Record System

This project implements a Student Record System in pure JavaScript, demonstrating core concepts such as :

● Variable declarations & scope (var/let/const, hoisting, TDZ, block vs. function scope)

● Arrays & matrices (1D & 2D arrays, nested loops)

● Objects (creation, access, mutation, spread, destructuring)

● Functions (declarations, expressions, arrow functions, parameters, return values, closures)

● Array methods (map, filter, reduce)

● Loop constructs (for, while, do…while; break & continue)

## Setup and Running

### Prerequisites

- **Node.js**: Install Node.js (v14 or later) from [nodejs.org](https://nodejs.org).
- **Browser**: Any modern browser (e.g., Chrome, Firefox) with developer tools.

### Running in Node.js

1. Save the code in a file named `studentRecords.js`.
2. Open a terminal in the project directory.
3. Run the code using:
   ```bash
   node studentRecords.js
   ```
4. View outputs in the terminal, including `console.table` for tabular data and `console.log` for other results.

### Running in Browser Console

1. Create an HTML file (e.g., `index.html`) with:
   ```html
   <!DOCTYPE html>
   <html>
     <body>
       <script src="studentRecords.js"></script>
     </body>
   </html>
   ```
2. Open the HTML file in a browser.
3. Open the developer tools (F12 or right-click > Inspect > Console).
4. View outputs in the console, using `console.table` for structured data.

### Testing Tips

- Each function includes a test call at the end of `studentRecords.js` (e.g., `console.log` or `console.table`).
- Use `console.table` to visualize array outputs (e.g., student lists, rosters).
- Test edge cases like empty arrays, invalid IDs, or non-existent courses by modifying test calls.
- Check for errors in the console to ensure robust input validation.

## JavaScript Concepts by Function

The following sections detail each function, its purpose, and the JavaScript concepts it demonstrates, covering variable declarations, arrays, objects, functions, array methods, loops, and more.

### Category A: Core Student Utilities

1. **addStudent(students, newStudent)**

   - **Purpose**: Appends a new student to a copy of the students array without mutating the original.
   - **Concepts**:
     - **Array Methods**: Spread operator (`[...students]`) for shallow copying.
     - **Variable Declarations**: `const` for arrays and return values.
     - **Objects**: Property checking with `hasOwnProperty`.
     - **Conditionals**: `if` statements for input validation.
     - **Error Handling**: `console.error` for invalid inputs.
     - **Loops**: `for...of` to validate required fields.
     - **Type Checking**: `typeof`, `Array.isArray` for input validation.
     - **Functional Programming**: Pure function ensuring no mutation.

2. **removeStudentById(students, id)**

   - **Purpose**: Returns a new array excluding the student with the given ID.
   - **Concepts**:
     - **Array Methods**: `filter` to remove matching student, `find` for validation.
     - **Variable Declarations**: `const` for arrays.
     - **Conditionals**: `if` for validation.
     - **Error Handling**: `console.error` for invalid inputs.
     - **Loops**: `for...of` for validation.
     - **Type Checking**: `typeof`, `Array.isArray`.
     - **Arrow Functions**: In `filter` and `find`.
     - **Functional Programming**: Pure function.

3. **updateStudentName(students, id, newName)**

   - **Purpose**: Updates a student’s name in a new array using object spread.
   - **Concepts**:
     - **Array Methods**: `map` to transform the array.
     - **Objects**: Spread operator (`{...student}`) for immutable updates.
     - **Variable Declarations**: `const` for arrays.
     - **Conditionals**: `if` for validation.
     - **Error Handling**: `console.error`.
     - **Loops**: `for...of` for validation.
     - **Type Checking**: `typeof`, `Array.isArray`, `trim`.
     - **Arrow Functions**: In `map` and `find`.
     - **Functional Programming**: Pure function.

4. **getStudentById(students, id)**

   - **Purpose**: Returns the student with the given ID or `null` if not found.
   - **Concepts**:
     - **Variable Declarations**: `const` for arrays.
     - **Loops**: `for...of` to search for the student.
     - **Conditionals**: `if` for validation and matching.
     - **Error Handling**: `console.error`, returns `null`.
     - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
     - **Objects**: Property access (`student.id`).

5. **calculateAverageGrade(student)**

   - **Purpose**: Computes the average of a student’s course grades.
   - **Concepts**:
     - **Array Methods**: `reduce` to sum grades.
     - **Variable Declarations**: `let` for counters, `const` for function scope.
     - **Loops**: `for...of` for validation.
     - **Conditionals**: `if` for validation, ternary for empty courses.
     - **Error Handling**: `console.error`, returns 0.
     - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
     - **Arrow Functions**: In `reduce`.
     - **Objects**: Accessing `student.courses` and `course.grade`.

6. **getHonorRoll(students, threshold)**

   - **Purpose**: Returns students with average grades ≥ threshold.
   - **Concepts**:
     - **Array Methods**: `filter` to select students.
     - **Variable Declarations**: `const` for function scope.
     - **Conditionals**: `if` for validation.
     - **Error Handling**: `console.error`, returns `null`.
     - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
     - **Arrow Functions**: In `filter`.
     - **Functional Programming**: Pure function, uses `calculateAverageGrade`.

7. **getCourseRoster(students, courseName)**
   - **Purpose**: Returns `{id, name, grade}` for students enrolled in `courseName`.
   - **Concepts**:
     - **Array Methods**: Manual array creation with `push`.
     - **Variable Declarations**: `const` for arrays.
     - **Loops**: Nested `for...of` for students and courses.
     - **Conditionals**: `if` for validation and matching.
     - **Error Handling**: `console.error`, returns `[]` or `null`.
     - **Type Checking**: `typeof`, `Array.isArray`, `trim`.
     - **Objects**: Creating objects, accessing `student.courses`.

### Category B: Loop-Based Reporting

8. **printStudentSummaries(students)**

   - **Purpose**: Returns summaries of student details (intended to log them).
   - **Concepts**:
     - **Array Methods**: Manual array creation with `push`.
     - **Variable Declarations**: `const` for arrays.
     - **Loops**: `for...of` to iterate students.
     - **Conditionals**: `if` for validation.
     - **Error Handling**: `console.error`, `continue` to skip invalid students.
     - **Type Checking**: `typeof`, `Array.isArray`, `trim`, `isNaN`.
     - **Objects**: Creating objects (`{name, id, age}`).
     - **Control Flow**: `continue` in loop.

9. **findFirstUnderage(students, ageLimit)**

   - **Purpose**: Returns the first student under `ageLimit`.
   - **Concepts**:
     - **Loops**: `for...of` to find the first match.
     - **Variable Declarations**: `const` for function scope.
     - **Conditionals**: `if` for validation and matching.
     - **Error Handling**: `console.error`, `continue`, returns `null`.
     - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
     - **Control Flow**: Implicit `break` via `return`.
     - **Objects**: Accessing `student.age`.

10. **countFailingCourses(students, passMark)**
    - **Purpose**: Counts courses with grades < `passMark`.
    - **Concepts**:
      - **Loops**: Nested `for...of` for students and courses.
      - **Variable Declarations**: `let` for counters, `const` for function scope.
      - **Conditionals**: `if` for validation and grade comparison.
      - **Error Handling**: `console.error`, `console.log`, `continue`, returns `null`.
      - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
      - **Objects**: Accessing `course.grade`.

### Category C: Object Methods & Destructuring

11. **printCourseStats(students)**
    - **Purpose**: Logs min, max, and average grades per course.
    - **Concepts**:
      - **Array Methods**: `reduce`, spread operator in `Math.min/max`.
      - **Objects**: `Object.entries` to iterate course grades, object creation.
      - **Variable Declarations**: `const` for objects.
      - **Loops**: `for...of` for students, courses, and `Object.entries`.
      - **Conditionals**: `if` for validation.
      - **Error Handling**: `console.error`, `console.log`, `continue`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`, `isNaN`.
      - **Template Literals**: For formatted logging.

### Category D: Factory & Closure

12. **createGradeFilter(min, max)**
    - **Purpose**: Returns a function to check if a student has grades in `[min, max)` (Note: Implementation should return a boolean).
    - **Concepts**:
      - **Closures**: Inner function retains `min` and `max`.
      - **Functions**: Function declaration, returns a function expression.
      - **Array Methods**: `map` (should be `some`).
      - **Variable Declarations**: `const` for function scope.
      - **Conditionals**: `if` for validation, range checking.
      - **Error Handling**: `console.log`, returns `null`.
      - **Type Checking**: `typeof`, `Array.isArray`, `isNaN`.
      - **Objects**: Accessing `student.courses`, creating objects.

### Category E: Relational-Style Operations

13. **getCoursesByInstructor(courses, instructorId)**

    - **Purpose**: Returns `{code, title}` for courses by `instructorId`.
    - **Concepts**:
      - **Array Methods**: Manual array creation with `push`.
      - **Variable Declarations**: `const` for arrays.
      - **Loops**: `for...of` to iterate courses.
      - **Conditionals**: `if` for validation and matching.
      - **Error Handling**: `console.error`, `console.log`, `continue`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`, `isNaN`.
      - **Objects**: Creating objects (`{code, title}`).

14. **totalCreditsPerStudent(students, courses)**

    - **Purpose**: Returns `{id, name, totalCredits}` for each student.
    - **Concepts**:
      - **Array Methods**: `map` to transform students.
      - **Variable Declarations**: `const` for function scope, `let` for counters.
      - **Loops**: Nested `for...of` for courses and matching.
      - **Conditionals**: `if` for validation and matching.
      - **Error Handling**: `console.log`, returns `null`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`.
      - **Objects**: Accessing `student.courses`, `course.credits`, creating objects.

15. **studentTranscript(students, courses, instructors)**

    - **Purpose**: Returns `{id, name, transcript: [{course, grade, instructorName}, ...]}`.
    - **Concepts**:
      - **Array Methods**: Manual array creation with `push`.
      - **Variable Declarations**: `const` for arrays.
      - **Loops**: Triple nested `for...of` for students, courses, instructors.
      - **Conditionals**: `if` for validation and matching.
      - **Error Handling**: `console.log`, `continue`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`.
      - **Objects**: Accessing `student.courses`, `course.title`, `instructor.id`, creating objects.

16. **courseAverages(students)**

    - **Purpose**: Returns `{course, avgGrade}` for each course.
    - **Concepts**:
      - **Array Methods**: `map`, `reduce` for averaging.
      - **Objects**: `Object.entries` to iterate course grades.
      - **Variable Declarations**: `const` for objects.
      - **Loops**: `for...of` for students and courses.
      - **Conditionals**: `if` for validation.
      - **Error Handling**: `console.warn`, `continue`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`, `isNaN`.
      - **String Methods**: `toFixed(2)` for formatting.

17. **topStudentsByCourse(students, courseName, n)**
    - **Purpose**: Returns top `n` students by grade for `courseName`.
    - **Concepts**:
      - **Array Methods**: `sort`, `slice`, manual array creation with `push`.
      - **Variable Declarations**: `const` for arrays.
      - **Loops**: `for...of` for students and courses.
      - **Conditionals**: `if` for validation and matching.
      - **Error Handling**: `console.error`, `console.warn`, `continue`.
      - **Type Checking**: `typeof`, `Array.isArray`, `trim`, `isNaN`.
      - **Objects**: Creating objects (`{name, course, grade}`).
      - **Arrow Functions**: In `sort`.
