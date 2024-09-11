
"use client"
import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '@/components/footer'
import Link from 'next/link'
import axios from 'axios'

const page = ({params}) => {
    const [data, setData] = useState(null)
//    FOR CLIENT SIDE
    // const fetchBlogData = ()=>{
    //     for(let i=0; i<blog_data.length; i++)
    //     {
    //         if (Number(params.id)===blog_data[i].id){

    //             setData(blog_data[i])
    //             console.log(blog_data[i]);
                
    //             break
    //     }
    // }
    // }

    // FOR BACKEND
    const fetchBlogData = async()=>{
        const response = await axios.get("/api/blog", {
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData()
    
     
    }, [])
    
  return (data? <>
    <div className=' bg-gray-200 py-5 px-5 md:px-12 lg:px28'>
        <div className=' flex justify-between items-center'>
            <Link src={assets.backward} href='/'>
            <Image src={assets.blogger} width={180} alt='' className=' w-[-130px] sm:w-auto'/> 
            </Link>
            <button className=' flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started</button>
        </div>
        <div className=' text-center my-24 '>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image src={data.authorImg} width={60} height={60} alt=''/>
            <p className=' mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>

    <div className=' mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
        <h1 className='my-8 text-[-26px] font-semibold'>Introduction:</h1>
        <p className=''>{data.description}</p>
        <h3 className=' my-5 text-[-18px] font-semibold'>Step1: Self reflection and goal setting</h3>
        <p className=' my-3'>kiiiiiiiiiii</p>
        <p className=' my-3'>kiiiiiiiiiii</p>


        <h3 className=' my-5 text-[-18px] font-semibold'>Step1: Self reflection and goal setting</h3>
        <p className=' my-3'>kiiiiiiiiiii</p>
        <p className=' my-3'>kiiiiiiiiiii</p>

        <h3 className=' my-5 text-[-18px] font-semibold'>Conclusion: Self reflection and goal setting</h3>
        <p className=' my-3'>kiiiiiiiiiii</p>
        <p className=' my-3'>kiiiiiiiiiii</p>
        <div className=' my-24'>
        <p className='text-black font-semibold my-4'>Share this articles on social medium</p>
   
   <div className='flex'>
    <Image src={assets.fbk} width={50} alt=''/>
    <Image src={assets.twitter} width={50} alt=''/>
    <Image src={assets.ig} width={50} alt=''/>
   </div>
   </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page