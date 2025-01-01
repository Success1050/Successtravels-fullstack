'use client'



import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
const url = 'https://backend-2-vtet.onrender.com'

const FetchComment = () => {
    const [comments, setComments]= useState([])
     useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${url}/comments/recent/`).then((res)=> setComments(res.data))
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