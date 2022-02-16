import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul className="books">
        {books.map((book) => {
          return <BookDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="book-list">
      <p>There's no book on your list, add some with the form below</p>
    </div>
  );
}

export default BookList;
