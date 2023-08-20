import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './card/BookCard';
import './app.css';
import Header from './Header';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const url = "http://182.16.156.100:5000/v1/user/book/all/no";
  const [book, getBook] = useState([]);

  const [bookType, setBookType] = useState('all');
  // const filteredBooks = bookType === 'all'?data:data.filter(b=>b.type===bookType)
  
  useEffect(()=>{
    function fetchData() {
      axios.get(url)
        .then(response => {
          getBook(response.data.output);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  },[]);

  // console.log(JSON.stringify(...book, undefined, 2))
  // console.log(Object.values(...book))
  const output = {
    free: book.filter(item => "free" in item),
    premium: book.filter(item => "premium" in item)
  };
  
  return (
    <div className="bookstore">
      <div className='header'>
      <Header />
      <div className='filter'>
        <button className='btn' onClick={()=>setBookType('all')}>All books</button>
        <button className='btn' onClick={()=>setBookType('free')}>Free Books</button>
        <button className='btn' onClick={()=>setBookType('premium')}>Premium Books</button>
      </div>
      </div>
      
      <div className="book-container">
        {bookType==="all"?(<BookCard books={book}/>):(<BookCard books={output[bookType]} />)}
      </div>
    </div>
  );
};

export default App;
