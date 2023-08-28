import React from 'react'
import './similarbooks.css'
import { useLocation } from 'react-router-dom'
import BookCard from '../card/BookCard';

export default function SimilarBooks() {
  const location = useLocation();
  const { flattenedArray, similarityType } = location.state;
  console.log('flattenedArray, similarityType inside similarbooks', flattenedArray, similarityType)
  const filteredBooks = flattenedArray.filter(item=>item.book_categories===similarityType)
  console.log('filteredBooks inside similarbooks', filteredBooks.map(item=> item))
  
  return (
    <div className="similar-books-container">
      <h4 className='about-similar-books'>{`${similarityType} সম্পর্কিত আরো বই`}</h4>
      <div className="similar-books-list">
        <BookCard source="similar-books" books={filteredBooks} />
      </div>
    </div>
  )
}
