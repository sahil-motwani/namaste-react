const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello my brother"
); // in the object we pass the atributes of the tag

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi i am chil1 h1"),
    React.createElement("h2", {}, "Hi i am child1 h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i am child2 h1 tag"),
    React.createElement("h2", {}, "Hi i am child2 h2 tag"),
  ]),
]);
root.render(parent);
console.log(root)