'use client'

import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://backend-2-vtet.onrender.com'

const FetchComment = () => {
  const [isloading, setIsLoading]= useState(false)
    const [comments, setComments]= useState([])
     useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await axios.get(`${url}/comments/recent/`).then((res)=> setComments(res.data)).catch((err)=>alert(err)).finally(()=> setIsLoading(false))
         // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return {comments, isloading}
}

export default FetchComment