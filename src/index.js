import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from './Book';

function BookList() {
  //   const someValue = "shakeAndBake";
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          // const {img, title, author, id} = book;
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />;
//       })}
//     </section>
//   );
// }

export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
