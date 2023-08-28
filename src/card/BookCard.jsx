import React from "react";
import { useNavigate } from "react-router-dom";
import "./bookcard-test2.css";

function prepareFlattenedArray(books) {
  if (Array.isArray(books[0]) && books[0].hasOwnProperty("book_categories")) {
    // If the input is already flattened, assume it's from SimilarBooks
    const flattenedArray = books.flat();
    return { flattenedArray };
  } else {
    // If the input is not flattened, assume it's from App
    const flattenedArray = books.flatMap((item) => item.free || item.premium);
    const types = flattenedArray.map((item) => item.book_categories);
    const uniqueTypes = [...new Set(types)];
    return { flattenedArray, uniqueTypes };
  }
}

function BookCard(props) {
  const { source, books } = props;
  let flattenedArray, uniqueTypes;

  if (source === "similar-books") {
    flattenedArray = books;
    console.log(
      "books and source inside bookcard from similarbooks",
      books,
      source
    );
  } else {
    const result = prepareFlattenedArray(books);
    flattenedArray = result.flattenedArray;
    uniqueTypes = result.uniqueTypes;
    console.log("books and source inside bookcard", flattenedArray, source);
  }
  const navigate = useNavigate();
  // console.log('flattenedArray inside bookcard', flattenedArray)
  return (
    <>
      <div className="container">
        <div className="book-container">
          {flattenedArray.map((item) => (
            <div
              key={item.id}
              className="book-link"
              onClick={() =>
                navigate(`/details/id=${item.id}`, {
                  state: {
                    source,
                    bookDetails: item,
                    uniqueTypes,
                    flattenedArray,
                  },
                })
              }
            >
              <div className="book-card">
                <div className="img-container">
                  <img
                    src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${item.image_name_f}`}
                    alt="book cover"
                  />
                </div>
                <div className="card-info-container">
                  <div className="item book-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="item-price">
                    {item.state === "Free" ? (
                      <p>ফ্রি</p>
                    ) : (
                      <p>মূল্যঃ {item.price}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookCard;
