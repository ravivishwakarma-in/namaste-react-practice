const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Jay Shree Krishna"
);
const paragraph = React.createElement(
  "p",
  { className: "paragraph" },
  "Lorem ipsum is a simply dummy text."
);

const div = React.createElement("div", { className: "div" }, "Parent Div", [
  heading,
  paragraph,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
