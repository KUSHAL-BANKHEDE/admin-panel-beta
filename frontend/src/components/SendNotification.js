// src/components/SendNotification.js
import React, { useState } from 'react';
import axios from 'axios';

const SendNotification = () => {
  const [message, setMessage] = useState('');

  const handleSendNotification = async () => {
    await axios.post('/api/notifications', { message });
    // Confirm notification sent
    setMessage('');
  };

  return (
    <div className="send-notification">
      <h1>Send Notification</h1>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={handleSendNotification}>Send</button>
    </div>
  );
};

export default SendNotification;
