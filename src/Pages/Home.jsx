import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard } from "../Components/BookCard";
import { DataContext } from "../Context/dataContext";
import "../styles.css";
import { library } from "../data";

export const Home = () => {
  const navigate = useNavigate();
  const { state } = useContext(DataContext);
  const categories = [...new Set(library.map((book) => book.category))];
  return (
    <div>
      <h1>Welcome to my Library</h1>
      <button onClick={() => navigate("/search")}>Search</button>
      {categories.map((category) => (
        <div key={category}>
          {state?.library.filter((item) => item.category === category)
            ?.length ? (
            <div>
              {" "}
              <h1>{category}</h1>
              <hr />{" "}
            </div>
          ) : (
            ""
          )}
          <div className="bookcard-container">
            {state?.library?.map(
              (book) =>
                book.category === category && (
                  <BookCard
                    key={book.title}
                    book={book}
                    categories={categories}
                  />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
