// src/components/ReviewManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get('/api/reviews');
      setReviews(res.data);
    };
    fetchReviews();
  }, []);

  const handleDeleteReview = async (id) => {
    await axios.delete(`/api/reviews/${id}`);
    // Refresh reviews list
  };

  return (
    <div className="review-management">
      <h1>Review Management</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            {review.comment}
            <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewManagement;
