import { useContext } from "react";
import { DataContext } from "../Context/dataContext";

export const Modal = ({ categories, book, setModal }) => {
  const { changeCategory } = useContext(DataContext);
  return (
    <div>
      {categories.map((category) => (
        <div key={book.title} style={{ textAlign: "left" }}>
          <label>
            <input
              type="checkbox"
              key={category}
              name={category}
              value={category}
              checked={book.category === category}
              onChange={(e) => {
                changeCategory(book.category, e.target.value, book.id);
                setModal(false);
              }}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};
