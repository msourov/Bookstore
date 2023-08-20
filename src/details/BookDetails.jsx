import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    // Fetch book details based on the extracted id
    // For demonstration purposes, let's assume you have a function to fetch book details
    // Replace 'fetchBookDetails' with your actual fetching logic
    fetchBookDetails(id)
      .then((response) => {
        setBookDetails(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  // Display book details using bookDetails object
  return (
    <div>
      <h2>Book Details</h2>
      <p>Book ID: {id}</p>
      {/* Display other book details using bookDetails */}
    </div>
  );
}

export default BookDetails;
