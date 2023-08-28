import { Link, useLocation, useNavigate } from "react-router-dom";
import "./book_details.css";

function BookDetails() {
  const location = useLocation();
  const { source, bookDetails, uniqueTypes, flattenedArray } = location.state;
  console.log(
    "flattenedArray, bookdetails inside bookdetails from",
    source,
    flattenedArray,
    bookDetails
  );
  const navigate = useNavigate();

  if (!bookDetails) {
    console.log("Book not found");
    return (
      <div>
        <h2>Book Details</h2>
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="details-container">
        <div className="img-wrapper">
          <img
            src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${bookDetails.image_name_f}`}
            alt="Book Cover"
          />
          {bookDetails.price ? (
            <p className="state">{bookDetails.price}</p>
          ) : (
            <p className="state">ফ্রি</p>
          )}
          <button className="app-btn">
            <Link
              to="https://play.google.com/store/apps/details?id=solutions.hidayahsmart.hidayah_islamic_book_store&fbclid=IwAR1CQs3bEFSiYxlsMczmWAhqaqnKMc7tKMlZZUTnbfUjOC8iPEr_eyIm3F4"
              className="app-link"
            >
              Read more
            </Link>
          </button>
        </div>
        <div className="info-container">
          {/* <h2>Book Details</h2> */}
          <div className="book-name">{bookDetails.name}</div>
          <p className="author-name">Author: {bookDetails.author_name}</p>
          <div className="category">
            <p>Category: {bookDetails.book_categories}</p>
          </div>
          <div className="total-page">
            <p>মোট পৃষ্ঠাঃ {bookDetails.total_page}</p>
          </div>
          <div className="summary">
            <p>{bookDetails.summary}</p>
          </div>
          {/* <div className="genre">
            <p className="label">Genre: </p>
            {source!="similar-books"?(uniqueTypes.map(type => (
                <button key={type} className="genre-type-button" onClick={()=>
                  navigate(`../similarbooks/type=${type}`, {state:{similarityType:type, flattenedArray}})}>{type}</button>
              )))}
            <div className="genre-types">
              
            </div>
          </div> */}
          <div className="genre">
            {source !== "similar-books" && <p className="label">Genre: </p>}
            {source !== "similar-books" && (
              <div className="genre-types">
                {uniqueTypes.map((type) => (
                  <button
                    key={type}
                    className="genre-type-button"
                    onClick={() =>
                      navigate(`../similarbooks/:type=${type}`, {
                        state: { similarityType: type, flattenedArray },
                      })
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
