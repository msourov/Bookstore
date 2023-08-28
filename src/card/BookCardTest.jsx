import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bookcard-test2.css';

function prepareFlattenedArray(books) {
  const flattenedArray = books.flatMap(item => item.free || item.premium);
  const types = flattenedArray.map(item => item.book_categories);
  const uniqueTypes = [...new Set(types)];
  return { flattenedArray, uniqueTypes };
}

function BookCard(props) {
  const {source, books} = props
  if (source==='similar-books') {
    const flattenedArray = books
    console.log('flattenedArray',flattenedArray)
  }
  const { flattenedArray, uniqueTypes } = prepareFlattenedArray(books);
  console.log(flattenedArray, uniqueTypes)
  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <div className='book-container'>
          {flattenedArray.map((item) => (
            <div
              key={item.id}
              className='book-link'
              onClick={() =>
                navigate(`/details/id=${item.id}`, {
                  state: { bookDetails: item, uniqueTypes, flattenedArray },
                })
              }
            >
              <div className='book-card'>
                <div className='img-container'>
                  <img src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${item.image_name_f}`} />
                </div>
                <div className='info-container'>
                  <div className='item book-name'>
                    <p>{item.name}</p>
                  </div>
                  <div className='item price'>
                    {item.state === 'Free' ? (
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
