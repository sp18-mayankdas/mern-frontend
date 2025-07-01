# Day-01

What is HTML?
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

Explanation of whole HTML code:

```
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
The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph

Who invented HTML?
Tim Berners-Lee

# HTML Styles:

    The HTML style attribute is used to add styles to an element, such as color, font, size, and more.

    Syntax:
        <tagname style="property:value;">

    Example:

```
        <h1 style="background-color: red;">My first heading</h1>
        <p style="background-color: yellow; font-size: 40px;">My first paragraph</p>
```

---

# Text Color:

```
    <h1 style="color:red;">Text color</h1>
```

---

Fonts:

# Font Family:

    -The CSS font-family property defines the font to be used for an HTML element:

    Example:

```
 <p style="font-family: Verdana, Geneva, Tahoma, sans-serif">
      Font family: Verdana
    </p>

    <p style="font-family: 'Times New Roman', Times, serif">
      Font family: Times New Roman
    </p>
```

# Text-Size

    The CSS font-size property defines the text size for an HTML element:

    Example:

    ```
    <p style="font-size:100px">Font Size: 30px</p>
    ```

# Text-Alignment

    The CSS text-align property defines the horizontal text alignment for an HTML element:

    Example:

    ```
    <p style="text-align: center">Text-Align: Center</p>
    ```

---

Chapter Summary:

    Use the style attribute for styling HTML elements
    Use background-color for background color
    Use color for text colors
    Use font-family for text fonts
    Use font-size for text sizes
    Use text-align for text alignment

---

# Html Text Formatting

Formatting elements were designed to display special types of text:

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text

# Difference between Bold and Strong Tag?

    Both gives visual output same, but bold tag is a physical tag & strong tag is a logical tag.Basically when bold tag is used, it only makes the words thicker... But when strong tag is used, it makes the word thicker & also tells the Browser that the text inside "strong" tag is important. & as per the tag the words inside the strong tags are loaded first & accurate.

# Difference between <i> and <em> tag?

    The <i> tag in HTML is used to display text in italics. It is generally used for stylistic purposes, such as denoting a different mood, voice, or foreign word, without adding any semantic emphasis to the content.

    The <em> tag in HTML is used to emphasize text, typically displayed in italics. It conveys semantic meaning, indicating that the emphasized text is important, which can also aid accessibility tools like screen readers in highlighting key content.

# Html Quotations and Citation Elements

Here , we will go through the <blockquote>, <q> , <abbr>, <addresss> , <cite> and <bdo> Html Elements.

BlockQuote: Defines a section that is quoted from another Source.

<blockquote> - So this elements defines a section that is quoted from another source. 
Browsers usually indent blockquote elements.

<q> - q defines a short quotation. It kinda adds apostrophe ..

<abbr> - abbr tag defines an abbreviation or an acronym like HTML , CSS or like World health organisation for WHO.

<address> - This tag defines the contact info , for the author or owner of a document or article.

This contact info can be email , phone number , url , physical address , social media handle , etc.

The text in the address usually returns in italic , and browsers will add a line break after and before the address element.

# HTML COMMENTS

HTML comments are used to hide any inline or any content whcih you dont want to show or need to use as a , they are not displayed on thwe brwoser and they can help document your htmls source code.

Syntax:

<!-- Write your comments here -->

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

# JavaScript

**_ Array _**

- toString does not take any arguments and if we try to console log toString() method, we get ==> [object Undefined]

- Arrays are a special type of objects and internally the elements of arrays gets stored as a key value pair , similar manner to the objects.

- typeof(array) ==> returns an object.

- Arrays variables can be objects. because arrays are special type of objects, we can have objects in an array , functions in an array , and also arrays in an array.

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

```
    array.slice(2,4)
```

    - from 2nd position till this position (ie., 4) excluding this index

    - Start position => Inclusive
    - Last Value => Exclusive

# Splice(starting index , DeleteCounts , ...items)

    - Used to add new items to an array
    - StartPositions:  tells from which index or from which position we need position we need to delete the elements.
    - DeleteCounts: how many elements can we delete
    - ...items: dd elements into the array at that position.

```
const array = [10,20,30,40,50];

array.splice(3 , 1 , 80 , "90" , true);

```

    - means at 3rd index , remove 1 element and at that position add 80 , "90" and true.

    - Output array: [10 , 20 , 30 , 80 , "90" , true];
    - Splice method returns the deleted element.
    - And , Splice method modifies or operates on original array.

# Objects

    - Objects are non-primitive datatypes and also known as reference types.
    - Objects are a collection of key-value pairs.
    - Objects are of three types:
        - Object Literal
        - functions
        - Arrays
    - If we have 2 objects having same data, they will not be equal to each other coz they are stored in different memory locations.
    ```
    const obj1 = {name: "John", age: 30};
    const obj2 = {name: "John", age: 30};
    ```
    - So , console.log(obj1 === obj2) will return false because the objects are reference types and we dont compare the value , we compare the address.

    - But if we have 2 objects having same reference, they will be equal to each other coz they are stored in same memory locations.

    - So , console.log(obj1 === obj2) will return true , for
    ```
    const obj1 = {name: "John", age: 30};
    const obj2 = obj1;
    ```
    - In this case , we directly assigned obj1 to obj2, so both are pointing to same memory location.so eve if we will make any changes in obj2, it will also reflect in obj1.

    - To access the prperties of an object, we can use either dot notation or bracket notation.
    - Dot notation: obj1.name
    - Bracket notation: obj1["name"] ==> keys of objects are always strings internally, so we can use bracket notation to access the properties of an object.
    - If we have any space or any special character in the key, we have to use bracket notation to access the property of an object , and the keys must be written in strings inside brackets.
    - If we try to access the property which is not in the object, it will return undefined.
    - We can write any valid javascript expression and variables inside the brackets to access the property of an object.
    ```
    const myName = 'mayank';
    const obj1 = {name: "John", age: 30, 'mayank':"developer"};
    console.log(obj1[myName]); // will return "developer" coz myName is a variable and it has the value "mayank" which is a key in the object obj1.
    ```

    - We can also write expressions like this:
    ```
    const obj1 = {fullName: "John"};
    console.log(obj1["full" + "Name"]); // will return "John"

    ```

    - We can add or update any values inside objects
