"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useReviews = () => {

    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        getComments();
    },[])

  const getComments = () => {
    GlobalApi.getComments().then(resp => {
        console.log(resp.data.data)
        setReviewsList(resp.data.data)
    });
  }

  return reviewsList;

}

export default useReviews;