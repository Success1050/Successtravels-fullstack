'use client'

import HeaderComponent from '@/components/HeaderComponent'
import { testimonials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FetchComment from './FetchComment';
import Spinner from '@/spinner/page';

const TestimonialsPage = () => {
  const {comments, isloading}= FetchComment()
  
  // console.log(comments);
  
  return (<>
  <section>
<HeaderComponent>
          <h4 className='text-4xl md:text-6xl font-bold text-center md:text-left text-white mb-4'>
           What people say about us
          </h4>
        </HeaderComponent>

        <main className='m-10'>
          <Link href= '/testimonials/addcomment'><div className='flex justify-self-end items-center border-[2px] border-solid text-center p-[.8rem] my-[.9rem] bg-blue-500 w-fit  rounded-[6px] text-white  border-blue-500 transform transition-all duration-300 active:scale-[0.9]'>Add comment</div></Link>

          {isloading? <Spinner/>: <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {comments.map((testimonial) => {
              // console.log(testimonial);
              
              const { id, name, message, email } = testimonial;
              let firstLetter= [...name][0].toUpperCase()
              console.log(firstLetter);
              
              
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform motion py-4'
                >
                  <div className=' flex justify-center my-4  text-4xl'>
                    {/* <img src={image_url}  width={100}
                      height={100}
                      className='rounded-full transform hover:scale-110 duration-300 h-24 w-24 cursor-pointer'/> */}

                        <div className='w-[100px] h-[100px] border-[2px] border-solid border-[#121212] rounded-[50%] flex justify-center items-center bg-blue-500 text-white text-[3rem]'>
                          <h2>{firstLetter}</h2>
                        </div>

                    {/* <Image
                      src={image_url}
                      // alt={name}
                      width={100}
                      height={100}
                      className='rounded-full transform hover:scale-110 duration-300 h-24 w-24 cursor-pointer'
                    /> */}
                  </div>

                  <div className='p-2'>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {name}
                    </h4>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {email}
                    </h4>
                    <p className='text-gray-600 text-center'>{message}</p>
                  </div>
                </div>
              );
            })}
          </div>}
          
          
        </main>
  </section>
  
</>
    
  )
}

export default TestimonialsPage