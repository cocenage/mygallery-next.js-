"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const usePaintings = () => {
    const [paintingsList, setPaintingsList] = useState([]);

    useEffect(() => {
      getPaintings();
    },[]);
  
    const getPaintings = () => {
      GlobalApi.getPaintings().then(resp => {
        console.log(resp.data.data);
        setPaintingsList(resp.data.data);
      });
    }

    return paintingsList;
}

export default usePaintings