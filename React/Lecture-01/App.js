const heading = React.createElement(
    "h1",
    { id: "heading" },  //==>whatever you pass in here goes as an attribute inside these tags
    "Hello world from React!" // ==> this is the children that will go inside the h1 tag

);

console.log(heading)


//React.createElement() ==> This "create-element"  basically creates an object(a JS object) and it's not actually a h1 tag yet.  

/*
const heading = React.createElement(
    "h1",
    {}, ==> this empty object is the place where you will give attributes to your tag like id , classes or much more...
    "Hello world from React!" 

);  
*/


//console.log(heading) ==> This heading element that is created is not a HTML element but a react element and at the end of the day a react element is nothing but a normal javascript object so this heading above is an object and not a html tag or whatsoever....



/*<---------------------- Creating a NEsted Structure ---------------------->*/

const nested =
    React.createElement("div", { id: "parent" },
        [
            React.createElement("div", { id: "child1" },
                [
                    React.createElement("h1", {}, "Hello! I am child1 H1 Tag.."),
                    React.createElement("h2", {}, "Hello! I am child1 H2 Tag..")
                ]
            ),

            React.createElement("div", { id: "child2" },
                [
                    React.createElement("h1", {}, "Hello! I am child2 H1 Tag.."),
                    React.createElement("h2", {}, "Hello! I am child2 H2 Tag..")
                ]
            )
        ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);



//root.render() ==> the job of this line is to take this heading object, create that h1 tag which the browser understands and put it up inside the root element that is mentioned above.

//React.createElement  ==>  is creating an object and it gets converted into a HTML that browser understands ,while it is rendering onto the DOM it gets converted into HTML and puts up into the DOM

//ReactElement(Object) => HTML(Browser Understands)

//root.render() ==> Suppose that you are rendering something into your root but you already have written some code or some stuff in the root tag then what happens is that when you do root.render() , it will replace everything inside the root with whatever we are passing in through react.

//Order of script files matters , because if you put your app script above your react script you will get an error and a blank page because in your app you use react but before injecting or using react into your code via the cdn , you loaded the app file.

//Not only the order of files,  it also matter that what is the root where we are rendering the stuff and that can be small portion of your page also , if you want to use react in a small portion or any particular section of you webpage you can make that particular section root also.. be it a header or a nav tag or anything big section or a small portion.. 



