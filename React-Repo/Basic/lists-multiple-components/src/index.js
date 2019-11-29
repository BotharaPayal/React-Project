import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 8];
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];
ReactDOM.render(<Blog posts={posts} />, rootElement);
