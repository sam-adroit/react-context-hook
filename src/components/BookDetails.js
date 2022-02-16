import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  const { title, author, id } = book;
  return (
    <li
      onClick={() => dispatch({ type: "REMOVE_BOOK", id })}
      className="book-details"
    >
      {title} {` by ${author}`}
    </li>
  );
}

export default BookDetails;
