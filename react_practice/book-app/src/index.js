import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Relentless",
    author: "Tim Grover",
  },
  {
    title: "Never eat alone",
    author: "Keith Ferraira",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, author } = book;
        <Book title={title} author={author} />;
      })}
    </section>
  );
}

function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <h3>{props.title}</h3>
    </article>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
