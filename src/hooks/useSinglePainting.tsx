"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSinglePainting = (id) => {

  const [detailPainting, setDetailPainting] = useState();

  useEffect(() => {
    getSinglePainting();
  }, [id])

  const getSinglePainting = () => {
    GlobalApi.getSinglePainting(id).then(resp => {
      setDetailPainting(resp.data.data[0]);
    });
  }

  return detailPainting;
}

export default useSinglePainting