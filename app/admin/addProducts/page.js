"use client"

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';


 const page = () => {
   const [image, setImage] = useState(false);
   const [data, setData] = useState({
    title:"",
    description:"",
    category:"startup",
    author:"Ade",
    authorImg:"/aut.jpg"
   })
   const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value;
      setData(data=>({...data, [name]: value}))
      console.log(data);
      
   }
   const onSubmitHandler = async (e)=>{
      e.preventDefault()

      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', data.image);
        const response = await axios.post('/api/blog', formData)
        if(response.data.success){
          toast.success(response.data.msg)
      }
      else{
        toast.error("error")
      }
     
     }
  return (
    <>
    <form onSubmit={onSubmitHandler} className=' pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className=' text-xl'>Upload thumbnail</p>
      <label htmlFor='image'>
      <Image className=' mt-4' src={!image? assets.twitter: URL.createObjectURL(image)} width={140} height={70} alt=''/>
      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        <p className=' text-xl mt-4'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className=' w-full sm:w-[-500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required/>
        <p className=' text-xl mt-4'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className=' w-full sm:w-[-500px] mt-4 px-4 py-3 border' type='text' placeholder='write content here' rows={6} required/>
        <p className=' text-xl mt-4'>Blog category</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className=' w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technolgy</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <button className=' mt8 w-40 h-12 bg-black text-white' type=' submit'>Add</button>
    </form>

    </>
  )
}
export default page