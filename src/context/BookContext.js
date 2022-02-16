import { createContext, useReducer, useEffect } from "react";
import { bookReducder } from "../reducer/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducder, [], () => {
    const getBook = JSON.parse(localStorage.getItem("book"));
    return getBook ? getBook : [];
  });

  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(books));
  }, [books]);

  // const [books, setBooks] = useState([
  //   { title: "The animal farm", author: "George Orwell", id: 1 },
  //   { title: "Things fall apart", author: "Chinua Achebe", id: 2 },
  // ]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: v4() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
