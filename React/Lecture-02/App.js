import React, { useState } from "react"
import ReactDOM from "react-dom/client"

//React.Create ELement = (object)=>Html Element ==> React element
const heading = React.createElement("h1", {}, "Hello Part 2");
console.log(heading);


//JSX - HTML-like OR XML-like like syntax ==> React element
const element = (<span>React element</span>)

const jsxHeading = (<h1>Jsx heading  {element}</h1 >)
console.log(jsxHeading);


//React components
const Body = () => {
    return (
        <h2>Hello world from body!</h2>
    )
}

const Head = () => {
    return (
        <div>
            <h1>Hello world from head!</h1>
            <Body />
            {heading} {/* You can use react element , javascript variable , any javascript function inside this curely braces  , you can put any js code inside this curly braces*/}
            {jsxHeading}
            {/* {console.log("HEllo world")} */}

            {Body()}
            <Body></Body>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Head />);

//- const jsxHeading = (<h1>Jsx heading</h1 >) ==>  Babel Transpiles it into react.createElement.
//- Jsx is trasnspiled by the compilers or bundlers under the hood before reaches it it into the document
// - At the end of the day ,functional components are functions only.
// - At the end of the day, React elements are converted into react.createElements and react.createElements are nothing but javascript objects.
// - {}--> Inside these curly braces you can execute any piece of javscript code , you can console,log , you can call function , you can use variables , you can use react elements , you can use javascript variables, you can even call the functional components inside these curly braces coz functional components are also functions. 
// - {} --> With the help of these curly braces you can even put react elements within other react elements , you can put react element into component , components into react elements , anything.
// - {}--> Also these curly braces do the data sanitization , so igt will protect your browser from malicious data .
