import { useState } from "react";
import "../styles.css";
import { Modal } from "./Modal";

export const BookCard = ({ book, categories }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bookCard">
      <div className="book-image">
        <img src={book.image} alt="book-cover-pic" />
        <button onClick={() => setModal(true)}>Move to</button>
        {modal && (
          <Modal categories={categories} book={book} setModal={setModal} />
        )}
      </div>
      <div className="book-details">
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
    </div>
  );
};
