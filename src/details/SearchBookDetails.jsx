import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./book_details.css";
import { useState, useEffect } from "react";

function SearchBookDetails() {
  const location = useLocation();
  const { bookDetails, searchArray, name: bookName } = location.state;
  const [book, setBook] = useState({});
  const baseUrl =
    "https://api.hidayahbooks.hidayahsmart.solutions/v1/user/book/search?name=";
  const encodedSearchValue = encodeURIComponent(bookName);
  const url = baseUrl + encodedSearchValue;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setBook(response.data[0].data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <div className="details-container">
        <div className="img-wrapper">
          <img
            src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${book.image_name_f}`}
            alt="Book Cover"
          />
          {book.price ? (
            <p className="state">{book.price}</p>
          ) : (
            <p className="state">ফ্রি</p>
          )}
          <button className="app-btn">
            <a
              href="https://play.google.com/store/apps/details?id=solutions.hidayahsmart.hidayah_islamic_book_store&fbclid=IwAR1CQs3bEFSiYxlsMczmWAhqaqnKMc7tKMlZZUTnbfUjOC8iPEr_eyIm3F4"
              className="app-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="info-container">
          <div className="book-name">{book.name}</div>
          <p className="author-name">Author: {book.author_name}</p>
          {/* Add other book details as needed */}
        </div>
      </div>
    </div>
  );
}

export default SearchBookDetails;
