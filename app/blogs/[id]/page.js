
"use client"
import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '@/components/footer'
import Link from 'next/link'
import axios from 'axios'

function Page  ({params})  {
    const [data, setData] = useState(null)
//    FOR CLIENT SIDE....ASSETS FILE
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

    // useEffect(() => {
    //     fetchBlogData()
    // }, [])
    

    // FOR BACKEND FOR GET  INDIVIDUAL REQ 
    const fetchBlogData = async()=>{
         const response = await axios.get("/api/blog", {params:{id:params.id}})
         setData(response.data);
    }

    useEffect(() => {
        fetchBlogData()
    
    })
    // }, [])
    
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
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=''/>
            <p className=' mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>

    <div className=' mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
        <h1 className='my-8 text-[-26px] font-semibold'>Introduction:</h1>
        <p className=''>{data.description}</p>
        <h3 className=' my-5 text-[-18px] font-semibold'>Step1: Any sufficiently advanced technology is indistinguishable from magic</h3>
        <p className=' my-3'>I think we can all agree that technology is essential. Unless, of course, you live on a deserted island! Even still, if you are currently reading this from a deserted island…</p>
        <p className=' my-3'>At Criteria for Success, we believe sales training should be accessible no matter where you are. That's why each of our training modules can be conducted in person or via live webinar.</p>


        <h3 className=' my-5 text-[-18px] font-semibold'>Step1:  The world isnt going to shower gold coins on you just because you have a good idea.</h3>
        <p className=' my-3'>“Dont wait for perfection. Life isnt perfect. Do the best you can and ship. Real people ship, and then they test and then they ship again. Then you wake up one day and you have something insanely great. </p>
        <p className=' my-3'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do</p>

        <h3 className=' my-5 text-[-18px] font-semibold'>Conclusion: You just have to pay attention to what people need and what has not been done.</h3>
        <p className=' my-3'>Its easy to get caught up in the day-to-day hard work of running a business and completely forget that while solving problems and building something you can be proud of, you also have an incredible opportunity to shape the future. Even better, you have the chance to meet amazing people and do amazing things along the way. It is important not to get lost among the trees and forget about the amazing, beautiful forest you are planting.</p>
        <p className=' my-3'>Its not about money or connections. Its the willingness to outwork and outlearn everyone when it comes to your business. And if it fails, you learn from what happened and do a better job next time.</p>
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