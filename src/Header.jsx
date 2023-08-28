import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './header.css';
import SearchBookCard from './card/SearchBookCard'

export default function Header() {

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const baseUrl = 'https://api.hidayahbooks.hidayahsmart.solutions/v1/user/book/search?name='
  const handleSearch = async () => {
    if (searchValue.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    let url = baseUrl + searchValue;
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log('search response', response.data)
      setSearchResults(response.data);
      setLoading(false);
      navigate(`/search-results/${searchValue}`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (searchValue.trim() === '') {
      setSearchResults([]); // Clear search results when search value is empty
      return;
    }
    handleSearch();
  }, []);

  console.log(searchResults)
  return (
    <div>
      <div className='header-container'>
        <div className='static'>
          <img src="/hidayah.png" alt="logo" className='logo'/>
          <h1 className='title'>Bookstore</h1>
        </div>
        <div className='navbar-links'>
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="" className='nav-item'>About</Link>
          <Link to="" className='nav-item'>Products</Link>
        </div>
        <div className='search-container'>
          <input type="search" placeholder="Search by book, author, genre" className='input-box'
          value={searchValue}
          onChange={handleSearchInputChange}
          ></input>
          <button onClick={handleSearch}>
          <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="currentColor"/>
  </svg>
          </div>
          </button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <SearchBookCard source="header" books={searchResults} loading={loading} />
      )}
    </div>
  )
}
