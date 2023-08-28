import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./search-book-card.css";

function SearchBookCard(props) {
  const { name } = useParams();
  console.log(typeof name);
  const { source, books: searchArray } = props;
  console.log("books inside searchbookcard", searchArray);
  const navigate = useNavigate();

  return (
    <>
      <div className="search-book-container">
        <div className="search-book-wrapper">
          {searchArray.map((item) => (
            <div
              key={item.data.name}
              className="search-book-card"
              onClick={() =>
                navigate(`/search-results/${item.data.name}/details`, {
                  state: {
                    bookDetails: item,
                    searchArray,
                    name: item.data.name,
                  },
                })
              }
            >
              <div className="search-book-card">
                <div className="img-container">
                  <img
                    src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${item.data.image_name_f}`}
                    alt="Book Cover"
                  />
                </div>
                <div className="search-card-info-container">
                  <div className="item book-name">
                    <p>{item.data.name}</p>
                  </div>
                  <div className="item-price">
                    {item.data.state === "Free" ? (
                      <p>ফ্রি</p>
                    ) : (
                      <p>মূল্যঃ {item.data.price}</p>
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

export default SearchBookCard;
