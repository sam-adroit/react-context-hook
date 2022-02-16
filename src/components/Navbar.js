import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Bankole's reading list</h1>
      <p>You currently have {books.length} books on this list</p>
    </div>
  );
};

export default Navbar;
