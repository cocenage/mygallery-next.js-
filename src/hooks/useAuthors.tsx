"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useAuthors = () => {
    const [authorsList, setAuthorsList] = useState([]);

    useEffect(() => {
        getAuthor();
    },[]);
  
    const getAuthor = () => {
      GlobalApi.getAuthor().then(resp => {
        setAuthorsList(resp.data.data);
      });
    }

    return authorsList;
}

export default useAuthors