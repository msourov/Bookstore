import React from 'react';
// import { Link } from 'react-router-dom';
import './bookcard-test2.css';

function BookCard (props) {
  const values = Object.values(props)
  console.log(values)
  const flattenedArray = values.flatMap(innerArray =>
    innerArray.map(obj => obj.free || obj.premium)
  );

  console.log(JSON.stringify(flattenedArray, undefined, 2));
  
  return (
    <div className='container'>
    <div className='book-container'>
      {
        flattenedArray.map((item)=>(
          // <Link to={`../details/BookDetails/${item.id}`} key={item.id} className='book-link'>
            <div className='book-card'>
              <div className='book-card' key={item.id}>
                <div className="img-container">
                  <img src={`https://api.hidayahbooks.hidayahsmart.solutions/static/book_cover/${item.image_name_f}`}/>
                </div>
                <div className="info-container">
                  <div className='item book-name'>
                    <p>{item.name}</p>
                  </div>
                  <div className='item price'>
                    {item.state==="Free"?(<p>ফ্রি</p>):(<p>মূল্যঃ {item.price}</p>)}
                  </div>
                  {/* <div className='item total-page'>
                    <p>Total page: {item.total_page}</p>
                  </div> */}
                </div>
            
              </div>
            </div>
          // </Link>
        ))
      }

    </div>
  </div>
  )
};

export default BookCard;