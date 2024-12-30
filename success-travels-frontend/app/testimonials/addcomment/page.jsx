'use client'

import axios from 'axios';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import { Audio } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'


const addcoment = () => {
  const router = useRouter()
  // const [images, setUploadedImages] = useState('')
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [comment, setComment]= useState('')
  const [isLoading, setIsloading]= useState('')

  
// const handleUploadImage=(e)=>{
//   const max = 2 * 1024 *1024
//   const file = e.target.files[0]

//   if (file && file.size > max) {
//     toast('file is larger than 2mb')
//     e.target.value= null
//   }else{ 
//      setUploadedImages(e.target.files[0])
//   }
// }

 const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    // formData.append('image', images); // Attach the image file
    formData.append('message', comment);


  const handleSubmit= async(e)=>{
    e.preventDefault()
    setIsloading(true)
    try {
          
      await axios.post('http://127.0.0.1:8000/comments/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type for file uploads
        }},).then((res)=>{
          console.log(res);
          
        if (res.status === 201 || res.status === 200) {
          toast.success('Comment was added successfully')
          // router.push('/about')
          router.push('/testimonials')
        }else{
          toast.error('an error occured')
        }
      }).catch((error)=> console.log(error)
      
      )
    } catch (error) {
      toast.error(error)
      
    }finally{
      setIsloading(false)
    }
  }
  return (
    <>
    <main className='h-screen flex justify-center items-center bg-gray-300'>
      <div className='bg-white rounded-lg shadow-md p-6 container mx-auto my-[4rem] md:w-[60%] h-full md:h-auto w-full flex md:flex-col items-center '>
        <div className='w-full'><ToastContainer/>
              <h3 className='text-xl font-bold mb-4 text-center'>Add comments</h3>
              <form action='#' onSubmit={handleSubmit}>
                {/* name */}
                <div className='mb-[1rem]'>
                  <label className='block text-gray-700 mb-2' htmlFor='Name'>
                    Name
                  </label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                    name='Name'
                    placeholder='Enter name'
                  />
                </div>
                {/* email */}
                <div className='mb-[1rem]'>
                  <label htmlFor='Email' className='block text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    name='Email'
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='Enter Email'
                  />
                </div>
                {/* images */}
                {/* <div className='mb-[1rem]'>
                  <label htmlFor='Email' className='block text-gray-700 mb-2'>
                    Upload image
                  </label>
                  <input
                    type='file'
                    accept='image/'
                    name='image'
                    onChange={handleUploadImage}
                      
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                  <h4>image should not exceed 2MB</h4>
                </div> */}
                  {/* comment */}
                <div className='mb-[1rem]'>
                  <label htmlFor='Name' className='block text-gray-700 mb-2'>
                    Comment
                  </label>
                  <textarea
                  value={comment}
                    placeholder='Write comment'
                    onChange={(e)=> setComment(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='py-2 px-4 bg-blue-500 text-white rounded'
                >
                  Add comment
                </button>
              </form></div>
        
            </div>
            {/* {isLoading && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>} */}
            </main>
     
    </>
  )
}

export default addcoment