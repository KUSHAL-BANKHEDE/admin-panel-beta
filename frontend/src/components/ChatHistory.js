// src/components/ChatHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatHistory = ({ userId1, userId2 }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get('/api/chats', { params: { userId1, userId2 } });
      setChats(res.data);
    };
    fetchChats();
  }, [userId1, userId2]);

  return (
    <div className="chat-history">
      <h1>Chat History</h1>
      <ul>
        {chats.map((chat) => (
          <li key={chat._id}>
            {chat.message} - From: {chat.from} - To: {chat.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
