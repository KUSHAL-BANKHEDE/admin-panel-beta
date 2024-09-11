// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Get chat history
router.get('/', async (req, res) => {
  const { userId1, userId2 } = req.query;
  const chats = await Chat.find({
    $or: [
      { from: userId1, to: userId2 },
      { from: userId2, to: userId1 }
    ]
  });
  res.json(chats);
});

// Send a message
router.post('/', async (req, res) => {
  const { from, to, message } = req.body;
  const chat = new Chat({ from, to, message });
  await chat.save();
  res.status(201).json(chat);
});

module.exports = router;
