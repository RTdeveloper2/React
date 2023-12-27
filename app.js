const heading = React.createElement(   // creating nested elements,first arg is tag,second in attribute and third is the child
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world h1"),
    React.createElement("h2", {}, "hello world h2"), //passing in array for siblings
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello world h1"),
    React.createElement("h2", {}, "hello world h2"), //passing in array for siblings
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// const heading = React.createElement("h1",{},"hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
