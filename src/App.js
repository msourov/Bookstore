import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './card/BookCard';
import './app.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import BookDetails from './details/BookDetails';
import SimilarBooks from './similarbooks/SimilarBooks';
import SearchBookCard from './card/SearchBookCard';
import SearchBookDetails from './details/SearchBookDetails';

const App = () => {
  const url = "https://api.hidayahbooks.hidayahsmart.solutions/v1/user/book/all/no";
  
  const [book, setBook] = useState([]);
  const [bookType, setBookType] = useState('all');
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setBook(response.data.output);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const output = {
    free: book.filter(item => "free" in item),
    premium: book.filter(item => "premium" in item)
  };
  // console.log('book', JSON.stringify(book, undefined, 2))
  // console.log('output', JSON.stringify(output, undefined, 2))
  return (
    // <div>Meh
    // </div>
    <div className="app">
    <div className="bookstore">
      <div className='header'>
      <Header />
      </div>
      <div className='filter'>
        <button className='btn' onClick={()=>setBookType('all')}>All books</button>
        <button className='btn' onClick={()=>setBookType('free')}>Free Books</button>
        <button className='btn' onClick={()=>setBookType('premium')}>Premium Books</button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="book-container">
              {bookType === "all" ? (
                // console.log('book', JSON.stringify(book, undefined, 2)) This works
                <BookCard source="app" books={book} /> 
              ) : (
                <BookCard source="app" books={output[bookType]} />
              )}
            </div>
          }
        />
        <Route path="/details/:id" element={<BookDetails books={output} />} /> 
        <Route path="/similarbooks/:type" element={<SimilarBooks />} />
        <Route path="/search-resuls/:name" element={<SearchBookCard />} />
        <Route path="/search-results/:name/details" element={<SearchBookDetails />}/>
      </Routes>
      
    </div>
    <Footer />
    </div>
  );
  
};

export default App;
