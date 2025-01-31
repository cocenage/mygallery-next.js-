import React, { useState } from 'react';

const CommentForm = ({ paintingId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paintingId, text: comment }),
    });

    if (response.ok) {
      // Обновить список комментариев или обновить страницу
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Отправить комментарий</button>
    </form>
  );
};

export default CommentForm;


// pages/api/comments.js

import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const session = await getSession({ req });

        if (!session) {
          return res.status(401).json({ error: 'Unauthorized' });
        }

        const { paintingId, text } = req.body;

        const response = await fetch('http://<YOUR-STRAPI-API-URL>/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.accessToken}`,
          },
          body: JSON.stringify({ painting: paintingId, text: text }),
        });

        const data = await response.json();

        res.status(201).json(data);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create comment' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}