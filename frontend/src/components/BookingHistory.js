// src/components/BookingHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get('/api/bookings');
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  return (
    <div className="booking-history">
      <h1>Booking History</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {/* Display booking details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
