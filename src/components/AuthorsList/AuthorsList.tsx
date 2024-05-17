'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthorsList = () => {
  const [images, setImages] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/paintings?populate=*');
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []); 

  const filterImages = () => {
    return images.filter(image => {
      if (selectedDate === '') {
        return true;
      }
      return new Date(image.createdAt).toDateString() === new Date(selectedDate).toDateString();
    });
  };

  return (
    <div>
      <h1>Images</h1>
      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      <ul>
        {filterImages().map(image => (
          <li key={image.id}>
            <img src={`http://localhost:1337${image.url}`} alt={image.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsList;