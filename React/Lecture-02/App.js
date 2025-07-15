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

