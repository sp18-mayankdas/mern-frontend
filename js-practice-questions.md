## 🎯 **Day 1 – Simple Number Problems**

### 🧩 **Core Concept Focus**

* Loops (`for`, `while`)
* Simple arithmetic operations
* Thinking in steps (pattern of input → logic → output)

---

### 🧠 **Questions List**

1. **Print Numbers from 1 to N**

   * Input: `5`
   * Output: `1 2 3 4 5`
   * ✨ *Teaches basic loop construction.*

2. **Print Numbers from N to 1 without changing the loop condition of above question**

   * Input: `5`
   * Output: `5 4 3 2 1`
   * ✨ *Thinking creatively and manipulating logic within the loop*

3. **Print All Even Numbers from 1 to N**

   * Input: `10`
   * Output: `2 4 6 8 10`
   * ✨ *Introduces conditional checks inside loops.*

4. **Sum of First N Natural Numbers**

   * Input: `5`
   * Output: `15`
   * ✨ *Encourages cumulative addition and variable usage.*

5. **Product (Factorial) of N**

   * Input: `5`
   * Output: `120`
   * ✨ *Reinforces loop control with multiplication logic.*

6. **Sum of All Even Numbers up to N**

   * Input: `10`
   * Output: `30` (`2+4+6+8+10`)
   * ✨ *Combines loops + condition + accumulation.*

7. **Print Squares of Numbers from 1 to N**

   * Input: `5`
   * Output: `1 4 9 16 25`
   * ✨ *Introduces arithmetic pattern generation.*


   Here’s a **well-designed Homework / Practice Challenge** set for **Day 1 – Simple Number Problems**, written in the same clean markdown format and aligned with the day’s learning goals 👇

---

### 🏠 **Homework / Practice Challenge**

1. **Print all numbers divisible by 3 and 5 up to N**

   * Input: `30`
   * Output: `15 30`
   * ✨ *Reinforces conditional checks inside loops.*

---

2. **Find the sum of all odd numbers up to N**

   * Input: `10`
   * Output: `25` (`1 + 3 + 5 + 7 + 9`)
   * ✨ *Combines looping with conditional accumulation.*

---

3. **Print the cubes of numbers from 1 to N**

   * Input: `5`
   * Output: `1 8 27 64 125`
   * ✨ *Extends arithmetic pattern logic beyond squares.*

---

4. **Print only the numbers that are both even and perfect squares**

   * Input: `1 to 20`
   * Output: `4 16`
   * ✨ *Encourages combining two conditions within one loop.*

## 🎯 **Day 2 – Conditions & Logic**

### 🧩 **Core Concept Focus**

* Conditional statements (`if`, `else if`, `else`)
* Comparison and logical operators
* Decision making based on different inputs
* Strengthening flow-of-control understanding

---

### 🧠 **Questions List**

1. **Find the Maximum of Three Numbers**

   * Input: `10 20 5`
   * Output: `20`
   * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*


---

2. **Check if a Number is Positive, Negative, or Zero**

   * Input: `-9`
   * Output: `Negative`
   * ✨ *Practices multi-branch conditions and comparison operators.*

---


3. **Calculate Electricity Bill**

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
* 🔍 *Teaches:* cumulative calculation + condition chaining.

---

4. **Check if a Character is a Vowel or Consonant**

   * Input: `e`
   * Output: `Vowel`
   * ✨ *Combines logical OR (`||`) operator and string comparisons.*

---

5. **Check if a Year is a Leap Year**

   * Input: `2024`
   * Output: `Leap Year`
   * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

   A year is a **leap year** if it satisfies these conditions:

   1. It is **divisible by 4**,  
      ➜ `year % 4 === 0`
   2. **But not divisible by 100**,  
      ➜ `year % 100 !== 0`
   3. **Unless** it is also **divisible by 400**,  
      ➜ `year % 400 === 0`

   🧩 **In Simple Words**
   - If a year is divisible by **4**, it’s a leap year.  
   - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
   - **But** if it’s divisible by **400**, it **is** a leap year again.

---

### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

   * Input: `A`
   * Output: `Uppercase Letter`
   * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
   * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

---

2. **Check Triangle Type Using Sides and Angles**

* **Input:** `Sides = 3, 4, 5`
* **Output:** `Right-Angled Triangle`
* ✨ *Combines geometric reasoning + Pythagoras theorem check.*
* Example Logic:

  * If `a² + b² = c²` → Right-angled
  * Else if all sides equal → Equilateral
  * Else if any two equal → Isosceles
  * Else → Scalene

---

3. **Calculate Income Tax Based on Slabs**

* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹62,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*


## 🎯 **Day 3 – Loops & Patterns**

### 🧩 **Core Concept Focus**

* Nested Loops
* Pattern Printing with Logic and Symmetry
* Understanding iteration depth for shapes and designs

---

### 🧠 **Questions List**

1. **Print Right-Angled Star Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     *
     **
     ***
     ****
     *****
     ```
   * ✨ *Teaches nested loops and increasing sequence printing.*

---

2. **Print Inverted Right-Angled Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     *****
     ****
     ***
     **
     *
     ```
   * ✨ *Reinforces decreasing nested loop structure.*

---

3. **Print Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *
        ***
       *****
      *******
     *********
     ```
   * ✨ *Teaches alignment using spaces and nested loops.*

---

4. **Print Inverted Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *******
       *****
        ***
         *
     ```
   * ✨ *Teaches reverse space-star pattern alignment.*

---

5. **Print Hollow Square Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *****
     *   *
     *   *
     *   *
     *****
     ```
   * ✨ *Practices conditional printing within nested loops.*

---

6. **Print Hollow Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *
        * *
       *   *
      *     *
     *********
     ```
   * ✨ *Combines conditionals and symmetrical logic in loops.*

---

7. **Print Alternating Binary Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     1
     0 1
     1 0 1
     0 1 0 1
     1 0 1 0 1
     ```
   * ✨ *Combines parity logic with nested loops.*

---

### 🏠 **Homework / Practice Challenge**

1. **Print Hollow Inverted Pyramid**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *     *
       *   *
        * *
         *
     ```
   * ✨ *Focuses on conditionally printing edges and spaces.*

---

2. **Print Butterfly Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *       *
     **     **
     ***   ***
     **** ****
     *********
     **** ****
     ***   ***
     **     **
     *       *
     ```
   * ✨ *Combines multiple sections with symmetry logic.*

---

3. **Print Diamond Pattern**

   * Input: `Rows = 3`
   * Output:

     ```
         *
        ***
       *****
        ***
         *
     ```
   * ✨ *Combines upper and lower pyramid logic for symmetry.*

---

4. **Print Hourglass Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *******
       *****
        ***
         *
        ***
       *****
      *******
     *********
     ```
   * ✨ *Practices combining inverse loops and symmetrical shapes.*

---

5. **Print Hollow Diamond Pattern**

   * Input: `Rows = 3`
   * Output:

     ```
         *
        * *
       *   *
        * *
         *
     ```
   * ✨ *Teaches combining upward and downward hollow pyramids.*

---

6. **Print Rhombus Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *****
        *****
       *****
      *****
     *****
     ```
   * ✨ *Practices offset alignment for uniform patterns.*

   ---

7. **Print Multiplication Table (Single and Upto N)**

   * Input 1: `Number = 5`
   * Output:

     ```
     5 x 1 = 5
     5 x 2 = 10
     ...
     5 x 10 = 50
     ```
   * Input 2: `Upto = 3`
   * Output:

     ```
     Table of 1
     1 x 1 = 1
     ...
     Table of 3
     3 x 10 = 30
     ```
   * ✨ *Practices simple and nested loops for repetitive operations.*


## 🎯 **Day 4 A – Understanding Decimal Number System**

### 🧩 **Core Concept Focus**

* Working with digits using arithmetic operations
* Extracting and analyzing digits using `%` and `/`
* Building logic around numbers and digit patterns
* Using loops and conditional statements for numerical problems
* Strengthening mathematical and logical thinking

---

### 🤓 **Questions List**

1. **Split Number into Digits**

   * Input: `N = 12345`
   * Output: `[1, 2, 3, 4, 5]`
   * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*

---

2. **Remove the Decimal Point Mathematically**

   * Input: `N = 12.34`
   * Output: `1234`
   * ✨ *Do not use string operations.*

---

3. **Separate Whole and Fractional Parts of a Number**

   * Input: `N = 5.75`
   * Output: `Whole = 5, Fraction = 0.75`
   * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` method.*

---

4. **Count Whole and Fractional Digits Separately**

   * Input: `N = 12.345`
   * Output: `Whole Count = 2, Fraction Count = 3`
   * ✨ *Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use `Math.trunc()` method.*

---

5. **Generate a Decimal Number from Whole and Fractional Digits**

   * Input: `Whole = [1, 2], Fraction = [3, 4]`
   * Output: `12.34`
   * ✨ *Form the number mathematically by combining the digits from both arrays using powers of 10.*

## 🎯 **Day 4 B – Digits & Numbers**

### 🧩 **Core Concept Focus**

* Working with digits using arithmetic operations
* Extracting and analyzing digits using `%` and `/`
* Building logic around numbers and digit patterns
* Using loops and conditional statements for numerical problems
* Strengthening mathematical and logical thinking

---

### 🧠 **Questions List**

1. **Split Number into Digits**

   * Input: `N = 12345`
   * Output: `[1, 2, 3, 4, 5]`
   * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*

---

2. **Reverse a Number**

   * Input: `N = 1234`
   * Output: `4321`
   * ✨ *Teaches how to extract and reconstruct digits using `%` and `/`.*

---

3. **Remove the Decimal Point Mathematically**

   * Input: `N = 12.34`
   * Output: `1234`
   * ✨ *Do not use string operations.*


---

4. **Separate Whole and Fractional Parts of a Number**

   * Input: `N = 5.75`
   * Output: `Whole = 5, Fraction = 0.75`
   * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` or `Math.floor()` method.*

---

5. **Generate a Decimal Number from Whole and Fractional Digits**

   * Input: `Whole = [1, 2], Fraction = [3, 4]`
   * Output: `12.34`
   * ✨ *Form the number mathematically by combining the digits from both arrays using powers of 10.*
   
---

6. **Check if a Number is a Palindrome**

   * Input: `N = 121`
   * Output: `Palindrome`
   * ✨ *Compares original and reversed numbers to detect symmetry.*

---

7. **Check if a Number is an Armstrong Number (also called a Narcissistic Number)**

   * Input: `N = 153`
   * Output: `Armstrong Number`
   * ✨ *Armstrong Number: `1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634`.*

---

### 🏠 **Homework / Practice Challenge**

1. **Find the Sum of Digits**

   * Input: `N = 987`
   * Output: `24`
   * ✨ *Builds understanding of digit extraction and accumulation.*
---


2. **Find the Average of Digits**

   * Input: `N = 4567`
   * Output: `Average = 5.5`
   * ✨ *Combines digit sum and count for average computation.*

---

3. **Find the Largest and Smallest Digit in a Number**

   * Input: `N = 9483`
   * Output: `Largest = 9, Smallest = 3`
   * ✨ *Enhances comparison logic using loops.*
   
---

4. **Check if a Number is a Strong Number**

   * Input: `N = 145`
   * Output: `Strong Number`
   * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*

---

5. **Check if a Number is an Automorphic Number**

   * Input: `N = 25`
   * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
   * ✨ *Practices modulus-based pattern matching.*

---

6. **Find the Frequency of Each Digit**

   * Input: `N = 112233`
   * Output: `1 → 2, 2 → 2, 3 → 2`
   * ✨ *Combines loops and conditionals for counting repetitions.*

---

7. **Check if a Number is a Harshad Number**

   * Input: `N = 18`
   * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
   * ✨ *Applies divisibility and digit-sum logic together.*


## 🎯 **Day 5 – Factors & Multiples**

### 🧩 **Core Concept Focus**

* Understanding **factors** and **multiples**
* Relationship between **HCF** and **LCM**
* Strengthening number theory concepts using loops, modulo, and basic arithmetic

---

## 🏫 **Class Questions**

1. **Print All Factors of a Number**

   * **Input:** `N = 24`
   * **Output:** `[1, 2, 3, 4, 6, 8, 12, 24]`

---

2. **Print All Multiples of a Number up to N**

   * **Input:** `Number = 4, Limit = 30`
   * **Output:** `[4, 8, 12, 16, 20, 24, 28]`

---

3. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

   * **Input:** `12, 18`
   * **Output:** `HCF = 6`

---

4. **Find the LCM (Least Common Multiple) of Two Numbers**

   * **Input:** `12, 18`
   * **Output:** `LCM = 36`
   

---

## 🏠 **Homework Questions**

1. **Count the Total Number of Factors of a Number**

   * **Input:** `N = 24`
   * **Output:** `8 Factors`

---

2. **Sum of All Factors of a Number**

   * **Input:** `N = 12`
   * **Output:** `Sum = 28`

---

3. **Find the Greatest Factor of a Number (Other Than Itself)**

   * **Input:** `N = 36`
   * **Output:** `18`

---

4. **Check if a Number is a Perfect Number**

   * **Input:** `N = 28`
   * **Output:** `Perfect Number`
   * If sum of all proper divisors = number → Perfect Number.

---

5. **Find the HCF and LCM of Three Numbers**

   * **Input:** `8, 12, 16`
   * **Output:** `HCF = 4, LCM = 48`

## 🎯 **Day 6 – Prime & Fibonacci**

### 🧩 **Core Concept Focus**

- Understanding **prime numbers** and divisibility logic
- Generating and analyzing the **Fibonacci series**
- Writing efficient code using loops, mathematical logic, and condition checks

---

## 🏫 **Class Questions**

1. **Check if a Number is Prime**

   - **Input:** `7`
   - **Output:** `Prime Number`

---

2. **Check if two Numbers are Co-Prime**

   - **Input:** `(7, 8)`
   - **Output:** `Co-Prime`

---

3. **Print Fibonacci Series up to N Terms**

   - **Input:** `N = 10`
   - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

---

4. **Find the Nth Fibonacci Number**

   - **Input:** `N = 8`
   - **Output:** `13`

---

5. **Check if a Number Belongs to the Fibonacci Series**

   - **Input:** `21`
   - **Output:** `Yes`

---

## 🏠 **Homework Questions**

1. **Print All Prime Numbers up to N**

   - **Input:** `N = 20`
   - **Output:** `2, 3, 5, 7, 11, 13, 17, 19`

---

2. **Sum of All Prime Numbers till N**

   - **Input:** `N = 10`
   - **Output:** `Sum = 17`

---

3. **Check if Two Numbers are Twin Primes**

   - **Input:** `(3, 5)`
   - **Output:** `Twin Primes`

---

4. **Print All Fibonacci Numbers up to a Given Limit**

   - **Input:** `Limit = 100`
   - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

---

5. **Generate Fibonacci Numbers Within a Range**

   - **Input:** `Start = 10, End = 100`
   - **Output:** `13, 21, 34, 55, 89`

---

6. **Find the Sum of Even Fibonacci Numbers up to N Terms**

   - **Input:** `N = 10`
   - **Output:** `Sum = 44` (`2 + 8 + 34`)

---

7. **Check if the Sum of Two Consecutive Fibonacci Numbers is Prime**

   - **Input:** `(5 + 8)`
   - **Output:** `13 is Prime`

---

8. **Print First N Prime Fibonacci Numbers**

   - **Input:** `N = 5`
   - **Output:** `2, 3, 5, 13, 89`

# 🎯 **Day 7 – Prime Factorization & Composite Numbers**

### 🧩 **Core Concept Focus**

- Understanding **prime factorization**
- Identifying **distinct prime factors**
- Classification of numbers using their factor patterns
- Strengthening number theory reasoning using loops, modulo, and mathematical logic

---

# 🏫 **Class Questions**

## **1. Find the Prime Factorization (Return as an Array)**

- **Input:** `N = 84`
- **Output:** `[2, 2, 3, 7]`

---

## **2. Factorization in Exponent Form**

- **Input:** `N = 360`
- **Output:** `"2^3 × 3^2 × 5^1"`

---

## **3. Distinct Prime Factor Count**

- **Input:** `N = 100`
- **Output:** `Distinct Prime Factors = 2`
  (Because 100 → 2, 5)

---

## **4. Check if a Number Is a Powerful Number**

A number is **powerful** if every prime factor appears with an exponent ≥ 2.

- **Input:** `N = 36`
- **Output:** `Powerful Number`
  (36 → 2² × 3² → all exponents ≥ 2)

---

# 🏠 **Homework Questions**

## **1. Find the Product of All Distinct Prime Factors**

- **Input:** `N = 150`
- **Output:** `Product = 2 × 3 × 5 = 30`

---

## **2. Check if a Number Is a Square-Free Number**

A number is **square-free** if none of its prime factors repeat.

- **Input:** `N = 30`
- **Output:** `Square-Free Number`
  (2 × 3 × 5 → no repeats)

---

## **3. Check if a Number Is a Smith Number**

A composite number whose **sum of digits = sum of digits of prime factors**.

- **Input:** `N = 666`
- **Output:** `Smith Number`

---

## **4. Check if a Number Is an Ugly Number**

Ugly numbers have only **2, 3, 5** as prime factors.

- **Input:** `N = 18`
- **Output:** `Not Ugly`
  (Because 18 → 2 × 3 × 3 → allowed)
- **Input:** `N = 14`
- **Output:** `Not Ugly`
  (Contains 7)

---

## **5. Check if a Number Is a Kaprekar Number**

Square the number → split → sum should give the original number.

- **Input:** `N = 45`
- **Output:** `Kaprekar Number`
  (45² = 2025 → 20 + 25 = 45)

---

## **6. Check if a Number Is a Happy Number**

Repeatedly replace the number with the sum of squares of its digits.
If it becomes **1**, it is Happy.

- **Input:** `N = 19`
- **Output:** `Happy Number`

---

## **7. Number Base Conversion (Any Base to Any Base)**

- **Input:** `Number = "101101", From Base = 2, To Base = 10`
- **Output:** `45`

---

## **8. Swap Variable without using third variable**

- **Input:** `a = 5, b = 6`
- **Output:** `a = 6, b = 5`

# 🎯 **Day 8 – String Problems**

### 🧩 **Core Concept Focus**

- String traversal
- Frequency counting
- Manual substring searching
- String transformation logic
- Character classification
- Avoiding built-ins where needed (for skill building)

---

# 🏫 **Class Questions**

### **1️⃣ Reverse a String (Manual Method Only)**

- **Input:** `"javascript"`
- **Output:** `"tpircsavaj"`
  ✨ _Use a loop — no `.reverse()`._

---

### **2️⃣ Check if a String is a Palindrome**

- **Input:** `"racecar"`
- **Output:** `Palindrome`
  ✨ _Compare characters from both ends using two-pointer logic._

---

### **3️⃣ Count Frequency of Each Character**

- **Input:** `"banana"`
- **Output:** `{ b:1, a:3, n:2 }`
  ✨ _Teaches hash maps / JS objects + iteration._

---

### **4️⃣ Find the Most Frequent Character in a String**

- **Input:** `"success"`
- **Output:** `Most frequent: s (3 times)`
  ✨ _Builds on frequency map — find maximum occurrence._

---

### **5️⃣ Check if Two Strings Are Anagrams (Without Sorting)**

- **Input:** `"listen"`, `"silent"`
- **Output:** `Anagram`
  ✨ _Use character frequency comparison — no `.sort()`._

---

### **6️⃣ Find the First Non-Repeating Character**

- **Input:** `"aabbcddeff"`
- **Output:** `c`
  ✨ _Requires 2-pass algorithm:
  first count → then find first unique._

---

# 🏠 **Homework Questions (7 Challenging Problems)**

### **1️⃣ Remove All Duplicate Characters (Keep First Occurrence)**

- **Input:** `"programming"`
- **Output:** `"progamin"`
  ✨ _Use a visited set + build new string._

---

### **2️⃣ Check if a String Contains Only Alphabets (No Regex)**

- **Input:** `"HelloWorld123"`
- **Output:** `False`
  ✨ _Use ASCII ranges manually._

---

### **3️⃣ Reverse Only the Words in a Sentence**

- **Input:** `"I love coding"`
- **Output:** `"coding love I"`
  ✨ _Split manually or build reverser yourself._

---

### **4️⃣ Find the Longest Word in a Sentence**

- **Input:** `"coding is beautiful"`
- **Output:** `"beautiful"`
  ✨ _Manual scanning + longest tracking._

---

### **5️⃣ Count the Number of Words (Manually Without split)**

- **Input:** `"  hi   there  world "`
- **Output:** `3 words`
  ✨ _Detect transitions from space → non-space using logic._

---

### **6️⃣ Find All Substrings of a String (No Built-ins)**

- **Input:** `"abc"`
- **Output:** `a, ab, abc, b, bc, c`
  ✨ _Nested loops + substring construction._

---

### **7️⃣ Compress a String (Basic Run-Length Encoding)**

- **Input:** `"aaabbccccd"`
- **Output:** `"a3b2c4d1"`
  ✨ _Count consecutive characters and build encoded output._

# 🎯 **Day 9 – Medium String Algorithms**

### 🧩 **Core Concept Focus**

- Sliding window problems
- Substring search
- Window expansion & contraction
- Character frequency maps

---

# 🏫 **Class Questions**

---

### **1️⃣ Find if One String Is a Substring of Another (Manual Method)**

- **Input:**
  Main string: `"hellothere"`
  Target string: `"there"`

- **Output:**
  `true`
  ✨ _Manual parsing only; check character by character without using `includes`, or `indexOf`._

---

### **2️⃣ Manual Substring Search (Without Using indexOf)**

- **Input:** text = `"hello world"`, pattern = `"wor"`
- **Output:** `Found at index 6`
  ✨ _Classic naive pattern matching algorithm (two nested loops)._

---

### **3️⃣ Check if One String is Rotation of Another**

- **Input:** `"abcde"`, `"cdeab"`
- **Output:** `Rotation`
  ✨ _Use the trick: second string must be inside `(s1 + s1)`._

---

# 🏠 **Homework Questions**

---

### **1️⃣ Count Frequency of Each Word in a Sentence**

- **Input:** `"i love coding and i love javascript"`
- **Output:** `{ i:2, love:2, coding:1, and:1, javascript:1 }`
  ✨ _Word parsing + map building._

---

### **2️⃣ Check If a String Is a Pangram**

- **Input:** `"The quick brown fox jumps over the lazy dog"`
- **Output:** `Pangram`
  ✨ _Check if all 26 letters exist._

---

### **3️⃣ Remove All Duplicate Words From a Sentence**

- **Input:** `"this is is a test test string"`
- **Output:** `"this is a test string"`
  ✨ _Track seen words, build cleaned sentence._

---

### **4️⃣ Find the Longest Palindromic Substring (Brute Force Allowed)**

- **Input:** `"babad"`
- **Output:** `"bab"` or `"aba"`
  ✨ _Check all substrings; teaches brute-force reasoning._

---

### **5️⃣ Find All Anagram Pairs in an Array of Strings**

- **Input:** `["cat", "tac", "act", "dog"]`
- **Output:** `["cat","tac","act"]`

---

### **6️⃣ Find the Longest Substring Without Repeating Characters (Sliding Window)**

- **Input:** `"abcabcbb"`
- **Output:** `"abc"`
  ✨ _Introduction to sliding windows, hash maps, and window shrinking logic._

# 🎯 Day 10 – Arrays (Basics + Intermediate)

### 🧩 Core Concept Focus

* Looping through arrays
* Finding max, min, sum
* Frequency based problems
* Working with indexes
* Basic transformations
* Eliminating duplicates

---

# 🏫 Class Questions (7 Problems)

### 1️⃣ Find the Maximum and Minimum Element

* **Input:** `[10, 25, 3, 18]`
* **Output:** `Max = 25`, `Min = 3`

---

### 2️⃣ Reverse an Array (Manual Method Only)

* **Input:** `[1, 2, 3, 4, 5]`
* **Output:** `[5, 4, 3, 2, 1]`
  
  ✨ Two pointer technique, no `reverse()`.

---

### 3️⃣ Check if an Array is Sorted (Ascending)

* **Input:** `[1, 2, 3, 4, 5]`
* **Output:** `Sorted`

---

### 4️⃣ Remove All Duplicates From an Array (Use filter method)

* **Input:** `[1, 2, 2, 3, 3, 4]`
* **Output:** `[1, 2, 3, 4]`

---

### 5️⃣ Merge Two Arrays Without Using concat or spread

* **Input:** `[1, 2, 3]` and `[4, 5]`
* **Output:** `[1, 2, 3, 4, 5]`

---

# 🏠 Homework Questions (7 Problems)

### 1️⃣ Find the Second Largest Element

* **Input:** `[10, 20, 4, 45, 99]`
* **Output:** `45`

---

### 2️⃣ Rotate an Array to the Right by K Steps

* **Input:** `[1, 2, 3, 4, 5]`, `K = 2`
* **Output:** `[4, 5, 1, 2, 3]`

---

### 3️⃣ Check if Two Arrays Are Equal (Same Order)

* **Input:** `[1, 2, 3]` vs `[1, 2, 3]`
* **Output:** `Equal`

---

### 4️⃣ Count Even and Odd Numbers in an Array

* **Input:** `[2, 5, 7, 8, 10]`
* **Output:** `Even = 3`, `Odd = 2`

---

### 5️⃣ Find All Unique Pairs Whose Sum Equals a Target

* **Input:** `[1, 2, 3, 4, 5]`, target = 6
* **Output:** `(1,5), (2,4)`

---

### 6️⃣ Left Shift an Array by One Position

* **Input:** `[1, 2, 3, 4]`
* **Output:** `[2, 3, 4, 1]`
  ✨ Manual shifting, moving first element to end.

---

### 7️⃣ Count How Many Times an Element Appears in an Array

* **Input:** array = `[1, 4, 4, 4, 2]`, element = `4`
* **Output:** `3`

# 🎯 **Day 11 – Medium Array Problems**

### 🧩 **Core Concept Focus**

- Two-pointer technique
- Prefix sums
- Subarray analysis

---

# 🏫 **Class Questions**

### **1️⃣ Find Missing Number from Range 1 to N**

- **Input:** `[1, 5, 2, 4]`
- **Output:** `3`

---

### **2️⃣ Move All Zeroes to End (Stable, O(n))**

- **Input:** `[0, 1, 0, 3, 12]`
- **Output:** `[1, 3, 12, 0, 0]`

---

### **3️⃣ Find the First Repeating Element in an Array**

- **Input:** `[10, 5, 3, 4, 3, 5, 6]`
- **Output:** `5`

---

### **4️⃣ Maximum Subarray Sum (Kadane’s Algorithm – O(n))**

- **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
- **Output:** `6`

---

# 🏠 **Homework Questions**

### **1️⃣ Find the Longest Subarray with Sum = K (Optimized)**

- **Input:** `[1, 2, 3, 4, 5]`, K = 9
- **Output:** `[2, 3, 4]`

---

### **2️⃣ Find the Length of the Longest Subarray with No Repeating Elements**

- **Input:** `[1,2,3,1,2,3,4]`
- **Output:** `4`

---

### **3️⃣ Maximum Subarray (Kadane’s Algorithm – O(n))**

- **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
- **Output:** `[4, -1, 2, 1]`

---

### **4️⃣ Find the Longest Increasing Subarray (Continuous)**

- **Input:** `[1, 2, 2, 3, 4, 5]`
- **Output:** `Length = 4, SubArray = [2, 3, 4, 5]`

# 🎯 **Day 12 – Bubble Sort Questions**

---

### **1️⃣ Sort an Array in Ascending Order Using Bubble Sort**

- **Input:** `[5, 3, 8, 4, 2]`
- **Output:** `[2, 3, 4, 5, 8]`

---

### **2️⃣ Sort an Array in Descending Order Using Bubble Sort**

- **Input:** `[7, 1, 5, 3, 2]`
- **Output:** `[7, 5, 3, 2, 1]`

---

### **3️⃣ Sort a String Alphabetically Using Bubble Sort Logic**

- **Input:** `"javascript"`
- **Output:** `"aacijprstv"`
  _(Treat string as array of characters.)_

---

### **4️⃣ Sort an Array and Count the Number of Swaps Performed**

- **Input:** `[4, 3, 2, 1]`
- **Output:**

  - Sorted: `[1,2,3,4]`
  - Swaps: `6`

---

# 🏠 **Homework Questions**

---

### **1️⃣ Sort an Array of Objects by Age (Ascending)**

- **Input:**

  ```js
  [
    { name: "A", age: 25 },
    { name: "B", age: 20 },
    { name: "C", age: 30 },
  ];
  ```

- **Output:** Sorted by `age`.

---

### **2️⃣ Sort an Array but Keep Zeros at the End (Zeros Fixed)**

- **Input:** `[3, 0, 5, 0, 2, 1]`
- **Output:** `[1, 2, 3, 5, 0, 0]`

---

### **3️⃣ Sort an Array and Track How Many Comparisons Were Made**

- **Input:** `[5, 1, 4, 2, 8]`
- **Output:**

  - Sorted array
  - Total comparisons

---

### **4️⃣ Sort an Array of Characters Case-Insensitive**

- **Input:** `['b', 'A', 'd', 'C']`
- **Output:** `['A', 'b', 'C', 'd']`

---

### **5️⃣ Sort a 2D Array by the First Element of Each Subarray**

- **Input:**

  ```
  [[3, "c"], [1, "a"], [2, "b"]]
  ```

- **Output:**

  ```
  [[1, "a"], [2, "b"], [3, "c"]]
  ```

---

### **6️⃣ Sort an Array in Ascending Order but Stop After K Passes**

- **Input:** `[5, 4, 3, 2, 1]`, K = 2
- **Output:** Array state after 2 bubble sort passes.

---

### **7️⃣ Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)**

- **Input:** `[9, 4, 2, 7, 6, 5]`
- **Output:** `[9, 2, 4, 7, 6, 5]`
  _(Sort evens using bubble sort while keeping odd numbers fixed.)_

---

### **8️⃣ Sort an Array of Strings by Length (Shortest to Longest)**

- **Input:** `["hi", "javascript", "is", "fun"]`
- **Output:** `["hi", "is", "fun", "javascript"]`

# 🎯 **Day 13 – Selection Sort Questions**

### 🧩 Core Concept Focus

- Selecting minimum or maximum element
- Swapping with correct index
- Reducing the unsorted region
- Understanding unstable sorting and selection-based logic

---

# 🏫 **Class Questions**

---

### **1️⃣ Sort an Array in Ascending Order Using Selection Sort**

- **Input:** `[7, 2, 9, 4, 1]`
- **Output:** `[1, 2, 4, 7, 9]`

---

### **2️⃣ Sort an Array in Descending Order**

- **Input:** `[3, 8, 5, 2, 9]`
- **Output:** `[9, 8, 5, 3, 2]`

---

### **3️⃣ Find the Kth Smallest Element Using Selection Logic**

- **Input:** `[9, 4, 7, 1, 3]`, `K = 3`
- **Output:** `4`

---

### **4️⃣ Selection Sort but Track Index of Minimum for Each Pass**

- **Input:** `[4, 2, 5, 3, 1]`
- **Output:**  
  Pass 1 → min index = 4  
  Pass 2 → min index = 3

---

### **5️⃣ Sort an Array of Objects by Name**

- **Input:**

  ```js
  [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
  ```

- **Output:** Sorted alphabetically by name.

---

# 🏠 **Homework Questions**
---

### **1️⃣ Find the K Largest Elements Without Full Sorting**

- **Input:** `[5, 1, 9, 3, 7]`, `K = 2`
- **Output:** `[9, 7]`
  _(Stop early once top K elements are placed.)_

---

### **2️⃣ Sort a 2D Array by Second Element in Each Subarray**

- **Input:** `[[3, 9], [1, 4], [2, 5]]`
- **Output:** Sorted by second values → `[[1,4], [2,5], [3,9]]`

---

### **3️⃣ Sort an Array and Count How Many Times Minimum Changed**

- **Input:** `[8, 3, 5, 2, 6]`
- **Output:** Number of times a new minimum was found.

---

### **4️⃣ Sort Only Elements at Even Indexes**

- **Input:** `[9, 4, 7, 6, 3, 2]`
- **Even index elements:** 9, 7, 3
- **Output:** Sort only these positions using selection logic.

---

### **5️⃣ Sort an Array of Characters by ASCII Value**

- **Input:** `['d', 'A', 'c', 'B']`
- **Output:** Sorted by ASCII: `['A', 'B', 'c', 'd']`

# 🎯 **Day 14 – Insertion Sort**

### 🧩 **Core Concept Focus**

* Sorted prefix + inserting new element at correct position
* Shifting elements efficiently
* Stable sorting
* Sorting nearly sorted arrays
* Using insertion logic for real problems

---

# 🏫 **Class Questions**

---

### **1️⃣ Sort an Array in Ascending Order Using Insertion Sort**

* **Input:** `[9, 5, 1, 4, 3]`
* **Output:** `[1, 3, 4, 5, 9]`

---

### **2️⃣ Sort an Array in Descending Order**

* **Input:** `[3, 8, 2, 7, 4]`
* **Output:** `[8, 7, 4, 3, 2]`
  *(Insert larger element at correct position.)*

---


### **3️⃣ Insert a New Element into an Already Sorted Array (Using Insertion Logic)**

* **Input:** Sorted: `[1, 3, 5, 6]`, New element: `4`
* **Output:** `[1, 3, 4, 5, 6]`

---

# 🏠 **Homework Questions**

---

### **1️⃣ Sort an Array but Keep Odd Numbers Fixed**

* **Input:** `[9, 4, 7, 6, 3, 2]`
* **Output:** Sort evens only, odd positions unchanged.

---

### **2️⃣ Sort an Array Using Insertion Sort but Print Array After Each Pass**

* **Input:** `[5, 2, 4, 6, 1]`
* **Output:** State of array after each insertion step.

---

### **3️⃣ Find the Position Where an Element Should Be Inserted in a Sorted Array**

* **Input:** `[2, 4, 6, 8]`, element = 5
* **Output:** Index where 5 should be placed.

---

### **4️⃣ Check If an Array Becomes Sorted After Inserting One Element**

* **Input:** `[1, 2, 4, 5, 3]`
* **Output:** `Yes / No`
  ✨ Essentially simulate “one-step insertion”.

---

### **5️⃣ Use Insertion Sort to Sort Only the Even Index Positions**

* **Input:** `[9, 1, 8, 2, 7, 3]`
* Sort positions `0, 2, 4` only
* **Output:** Updated array.

# 🎯 **Day 15 – Linear Search**

### 🧩 **Core Concept Focus**

- Scanning arrays sequentially
- Searching for values and conditions
- Returning index, boolean, counts
- Searching in arrays of objects
- Condition-based searching
- Handling edge cases

---

# 🏫 **Class Questions**

---

### **1️⃣ Find an Element in an Array Using Linear Search**

- **Input:** array = `[4, 2, 7, 1, 9]`, element = `7`
- **Output:** `Found at index 2`

---

### **2️⃣ Find the First Occurrence of an Element**

- **Input:** `[3, 5, 3, 7, 3]`, search = `3`
- **Output:** `index 0`

---

### **3️⃣ Find the Last Occurrence of an Element**

- **Input:** `[3, 5, 3, 7, 3]`, search = `3`
- **Output:** `index 4`

---

### **4️⃣ Count How Many Times an Element Appears**

- **Input:** `[1, 2, 2, 3, 2, 4]`, element = `2`
- **Output:** `3 times`

---

### **5️⃣ Find All Indexes Where the Element Appears**

- **Input:** `[5, 7, 5, 9, 5]`, search = `5`
- **Output:** `[0, 2, 4]`

---

### **6️⃣ Linear Search in Array of Objects**

- **Input:**

  ```js
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  ```

  Search id = 2

- **Output:** `{id:2, name:"B"}`

---

# 🏠 **Homework Questions**

---

### **1️⃣ Check If an Element Exists in a 2D Array**

- **Input:**

  ```
  [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  search = 4
  ```

- **Output:** `Found at position (1,1)`

---

### **2️⃣ Find the Minimum Value Using Linear Scan**

- **Input:** `[9, 3, 5, 1, 7]`
- **Output:** `1`

---

### **3️⃣ Find the Maximum Value Using Linear Scan**

- **Input:** `[4, 9, 2, 11, 6]`
- **Output:** `11`

---

### **4️⃣ Find the First Element Greater Than X**

- **Input:** `[2, 5, 9, 12, 15]`, X = `10`
- **Output:** `12`

---

### **5️⃣ Check if Array is Strictly Increasing (Using Linear Scan)**

- **Input:** `[1, 2, 3, 5, 4]`
- **Output:** `false`

---

### **6️⃣ Find the First String That Starts With a Given Character**

- **Input:** `["apple", "ball", "cat", "apply"]`, char = `'a'`
- **Output:** `"apple"`

# 🎯 **Day 16 – Binary Search**

### 🧩 **Core Concept Focus**

- Understanding mid calculation
- Searching efficiently in sorted arrays
- Avoiding overflow in mid formula
- Handling duplicates
- Handling edge cases and boundaries
- Using binary search for conditions

---

# 🏫 **Class Questions**

_(All arrays are sorted.)_

---

### **1️⃣ Find an Element Using Binary Search**

- **Input:** `[1, 3, 5, 7, 9]`, search = `7`
- **Output:** `3`
  - Return -1 If Element Is Not Found

---

### **2️⃣ Find the First Occurrence of a Repeated Number**

- **Input:** `[2, 4, 4, 4, 9, 11]`, search = `4`
- **Output:** `index 1`

---

### **3️⃣ Find the Last Occurrence of a Repeated Number**

- **Input:** `[2, 4, 4, 4, 9, 11]`, search = `4`
- **Output:** `index 3`

---

# 🏠 **Homework Questions**

---

### **1️⃣ Find the Smallest Element Greater Than a Given Value**

- **Input:** `[3, 5, 8, 12, 17]`, search = `10`
- **Output:** `12`

---

### **2️⃣ Find the Greatest Element Smaller Than a Given Value**

- **Input:** `[3, 5, 8, 12, 17]`, search = `10`
- **Output:** `8`

---

### **3️⃣ Check If a Number Is a Perfect Square Using Binary Search**

- **Input:** `N = 36`
- **Output:** `true`  
  _For N = 37 → false._

---

### **4️⃣ Find the Peak Element in a Mountain Array (Binary Search Variant)**

- **Input:** `[1, 3, 5, 7, 6, 4, 2]`
- **Output:** `Peak = 7` at index 3

---

### **5️⃣ Binary Search in a Descending Sorted Array**

- **Input:** `[100, 90, 70, 40, 10]`, search = `70`
- **Output:** `index 2`

---

### **6️⃣ Count How Many Times an Element Appears (Using Binary Search Twice)**

- **Input:** `[1, 2, 2, 2, 3, 4]`, element = `2`
- **Output:** `3 times`

---

### **7️⃣ Search for a Character in a Sorted String Using Binary Search**

- **Input:** `"aabbccddeefg"`, search = `'e'`
- **Output:** `index 8` (first occurrence)

---

### **8️⃣ Find the Index Where an Element Should Be Inserted (Lower Bound)**

- **Input:** `[1, 3, 5, 7]`, element = `4`
- **Output:** `Insert at index 2`

## 🎯 **Day 17 – Introduction to Recursion**

### 🧩 **Core Concept Focus**

- Understanding what recursion is
- Base case vs recursive case
- How recursive calls work
- Visualizing the call stack
- Preventing infinite recursion
- Replacing simple loops with recursion

---

## 🏫 **Class Questions**

### **1️⃣ Print Numbers from 1 to N Using Recursion**

- **Input:** `N = 5`
- **Output:** `1 2 3 4 5`

---

### **2️⃣ Print Numbers from N to 1 Using Recursion**

- **Input:** `N = 5`
- **Output:** `5 4 3 2 1`

---

### **3️⃣ Find Factorial of a Number Using Recursion**

- **Input:** `N = 5`
- **Output:** `120`

---

### **4️⃣ Find the Sum of First N Natural Numbers Using Recursion**

- **Input:** `N = 4`
- **Output:** `10`

---

### **5️⃣ Calculate Power Using Recursion**

- **Input:** `a = 2, n = 5`
- **Output:** `32`
  _(Compute aⁿ recursively.)_

---

## 🏠 **Homework Questions**

---

### **1️⃣ Find the Sum of Digits of a Number Using Recursion**

- **Input:** `N = 1234`
- **Output:** `10`

---

### **2️⃣ Reverse a Number Using Recursion**

- **Input:** `N = 123`
- **Output:** `321`

---

### **3️⃣ Find the Product of Digits of a Number Using Recursion**

- **Input:** `N = 234`
- **Output:** `24`

---

### **4️⃣ Check if a Number is Palindrome Using Recursion**

- **Input:** `N = 121`
- **Output:** `Palindrome`

---

### **5️⃣ Count How Many Zeros Are Present in a Number Using Recursion**

- **Input:** `N = 102030`
- **Output:** `3`

---

### **6️⃣ Print All Natural Numbers Between Two Given Numbers Using Recursion**

- **Input:** `start = 3, end = 8`
- **Output:** `3 4 5 6 7 8`

---

### **7️⃣ Find the Sum of Even Numbers from 1 to N Using Recursion**

- **Input:** `N = 10`
- **Output:** `30`

## 🎯 **Day 18 – Recursion on Arrays and Strings**

### 🧩 **Core Concept Focus**

- Passing index in recursive calls
- Reducing problem size using index or length
- Traversing arrays recursively
- Processing strings character by character
- Returning values from recursion
- No loops, no backtracking, no multiple recursive calls

---

## 🏫 **Class Questions**

---

### **1️⃣ Print All Elements of an Array Using Recursion**

- **Input:** `[1, 2, 3, 4]`
- **Output:** `1 2 3 4`  
  Constraint: no loops allowed.

---

### **2️⃣ Find the Sum of All Elements in an Array Using Recursion**

- **Input:** `[2, 4, 6, 8]`
- **Output:** `20`

---

### **3️⃣ Check if an Array Is Sorted (Ascending) Using Recursion**

- **Input:** `[1, 2, 3, 5, 4]`
- **Output:** `false`

---

### **4️⃣ Reverse a String Using Recursion**

- **Input:** `"hello"`
- **Output:** `"olleh"`

---

### **5️⃣ Check if a String Is Palindrome Using Recursion**

- **Input:** `"madam"`
- **Output:** `Palindrome`

---

## 🏠 **Homework Questions**

---

### **1️⃣ Find the Length of a String Using Recursion**

- **Input:** `"javascript"`
- **Output:** `10`

---

### **2️⃣ Count the Number of Vowels in a String Using Recursion**

- **Input:** `"education"`
- **Output:** `5`

---

### **3️⃣ Find the First Occurrence of an Element in an Array Using Recursion**

- **Input:** `[5, 3, 7, 3, 9]`, element = `3`
- **Output:** `index 1`

---

### **4️⃣ Find the Last Occurrence of an Element in an Array Using Recursion**

- **Input:** `[5, 3, 7, 3, 9]`, element = `3`
- **Output:** `index 3`

---

### **5️⃣ Count How Many Times a Character Appears in a String Using Recursion**

- **Input:** `"recursion"`, character = `'r'`
- **Output:** `2`

---

### **6️⃣ Replace All Occurrences of a Character in a String Using Recursion**

- **Input:** `"banana"`, replace `'a'` with `'x'`
- **Output:** `"bxnxnx"`

---

### **7️⃣ Check if All Elements in an Array Are Even Using Recursion**

- **Input:** `[2, 4, 6, 8]`
- **Output:** `true`

---

### **8️⃣ Find the Maximum Element in an Array Using Recursion**

- **Input:** `[7, 3, 9, 2, 5]`
- **Output:** `9`
## 🎯 **Day 19 – Recursion on Objects**

### 🧩 **Core Concept Focus**

- Recursive traversal of nested objects
- Depth-first recursion
- Base cases for objects and arrays
- Aggregation, search, and transformation on nested data
- Real-world JSON-style recursion

---

## 🏫 **Class Questions**

---

### **1️⃣ Print All Values in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 'Hi'
      }
    }
  }
}
```

- **Output:** `1 2 3 Hi`

---

### **2️⃣ Count Total Number of Keys in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
}
```

- **Output:** `6`

---

### **3️⃣ Find the Sum of All Numeric Values in a Nested Object**

- **Input:**

```js
{
  x: 10,
  y: {
    z: 5,
    w: {
      k: 15
    }
  }
}
```

- **Output:** `30`

---

### **4️⃣ Print All Keys in a Nested Object**

- **Input:**

```js
{
  a: {
    b: {
      c: 1;
    }
  }
}
```

- **Output:** `a b c`

---

## 🏠 **Homework Questions**

---

### **1️⃣ Convert All String Values to Uppercase in a Nested Object**

- **Input:**

```js
{
  name: "john",
  details: {
    city: "mumbai",
    role: "dev"
  }
}
```

- **Output:** All strings converted to uppercase.

---

### **2️⃣ Count How Many Times a Key Appears in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
}
```

Search key: `"a"`

- **Output:** `3`

---

### **3️⃣ Find the Depth of a Nested Object**

- **Input:**

```js
{
  a: {
    b: {
      c: {
        d: 1;
      }
    }
  }
}
```

- **Output:** `4`

---

### **4️⃣ Check If a Value Exists in a Nested Object**

- **Input:**

```js
{
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
}
```

Search value: `"Delhi"`

- **Output:** `true`

---

### **5️⃣ Replace a Value in a Nested Object Using Recursion**

- **Input:** Replace `city: "Delhi"` with `"Bangalore"`
- **Output:** Updated object.

---

### **6️⃣ Count Total Number of Objects Inside a Nested Structure**

- **Input:**

```js
{
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    }
  }
}
```

- **Output:** `5`
  Count only objects, not primitive values.

---

### **7️⃣ Find the Path to a Given Key in a Nested Object**

- **Input:** Find path to key `"e"`
- **Output:** `"b.d.e"`

---

### **8️⃣ Find the Maximum Numeric Value in a Nested Object**

- **Input:**

```js
{
  a: 4,
  b: {
    c: 9,
    d: {
      e: 2
    }
  }
}
```

- **Output:** `9`
