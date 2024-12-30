'use client'

import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchComment = () => {
    const [comments, setComments]= useState([])
     useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('http://127.0.0.1:8000/comments/recent/').then((res)=> setComments(res.data))
         // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return {comments}
}

export default FetchComment