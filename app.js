//const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!!!") //3 arguments: the element tag you wanna create, 2) an object: which we can pass attributes for our tag/element, 3)Children:  innerHTMl value for the firsty argument(element/tag) //creating a element is a core thing of React so it comes from this React the 1st cdn link

//Creating nested elements:
/* <div id = "parent">
        <div id = "child">
            <h1>Hi I am h1 tag</h1>
            <h2>Hi i am an h2 tag</h1>
        </div>
        <div id = "child2">
            <h1>Hi I am h1 tag</h1>
            <h2>Hi i am an h2 tag</h1>
        </div>
    </div> */

const parent = React.createElement("div", {id: "parent"},  [React.createElement("div", {id: "child"},  [React.createElement("h1", {}, "Hi I am an h1 tag"),  React.createElement("h2", {}, "Hi I am an h2 tag")]),
React.createElement("div", {id: "child2"},  [React.createElement("h1", {}, "Hi I am an h1 tag"),  React.createElement("h2", {}, "Hi I am an h2 tag")])]) 
//In createlement if you want more than one Children(siblings) then yu would have to pass those childrens in an array, otherwise single children directly


const root = ReactDOM.createRoot(document.getElementById("header"))  //Creating a root comes from ReactDOM//when we ar creating a root using a DOM element(document.getElementById("root")) and renedering something inside it then it is the job of ReactDOM //Whenn we want to put our H1 into our DOM/browser so we use ReactDOM
//In ReactJS, the root refers to the place in your HTML where your entire React application will be rendered.
//ReactDOM.createRoot(...): This creates a React root using that DOM element. It's essentially the entry point for the React app into the HTML page.
//So, root here is a React root object that controls rendering of React components inside the DOM element with ID "root".
////React.createElement() creates a react element which is a normal javascript object. In this case it an object of type: "h1". It has something known as props: its attributes + Children

// 📌 Why do we need a root?
// React needs to connect to the actual HTML page somehow. That’s what the root is for:
// It’s the bridge between React's virtual DOM and the browser's actual DOM.
// ReactDOM will take your React components/elements (like heading in your case) and render them inside this root element in the real HTML.

// 📦 ReactDOM vs React
// React: Used to create elements/components (React.createElement)
// ReactDOM: Responsible for rendering those elements into the actual DOM (ReactDOM.createRoot(...).render(...))

console.log(parent) ////React.createElement() creates a react element which is a normal javascript object. In this case it an object of type: "h1". It has something known as props: its attributes + Children

//root.render(heading)  //renedering our heading inside root
//This render method will take this object and convert it into html tag and put it into the page/DOM

root.render(parent)