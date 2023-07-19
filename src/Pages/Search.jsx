import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard } from "../Components/BookCard";
import { DataContext } from "../Context/dataContext";
import { library } from "../data";
import "../styles.css";
export const Search = () => {
  const navigate = useNavigate();
  const { state, searchBook, searchedBooks } = useContext(DataContext);
  const categories = [...new Set(library.map((book) => book.category))];

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <p>Search here</p>
      <input
        type="text"
        value={state?.search}
        placeholder="search by title"
        onChange={(e) => searchBook(e.target.value)}
      />
      <div className="search-page">
        {searchedBooks?.map((book) => (
          <BookCard key={book.title} book={book} categories={categories} />
        ))}
      </div>
    </div>
  );
};
