"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useComments = () => {
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
      getComments();
    },[]);
  
    const getComments = () => {
      GlobalApi.getComments().then(resp => {
        console.log(resp.data.data);
        setCommentsList(resp.data.data);
      });
    }

    return commentsList;
}

export default useComments