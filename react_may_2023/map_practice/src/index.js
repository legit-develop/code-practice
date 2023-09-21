import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const title = "";
function Book() {
  const author = "Collen Hoover";
  return (
    <article className="book">
      <h1>Sudoku</h1>
      <h2>{author}</h2>
      <img src="./images/pic-1.jpg" alt="book" />
      <p>{4 + 9}</p>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
