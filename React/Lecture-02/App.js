import React from "react"
import ReactDOM from "react-dom/client"


const root  = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("h1" , {} , "Hello Part 2");

root.render(heading)