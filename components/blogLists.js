
import React from 'react'
import { blog_data } from '@/Assets/assets'
import BlogItem from './blogItem'
import { useState, useEffect } from 'react'
import axios from 'axios'


function BlogLists  () {
    const [menu,setMenu] = useState('All')
    const [blogs, setBlogs] = useState([])

// TO FETCH DATAS FROM DB
    const fetchBlogs = async()=>{
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
      
    }
    useEffect(() => {
      fetchBlogs();
    }, [])
    
  return (
    
    <div>
        <div className=' flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('All')} className= {menu==="All"? "bg-black text-white py-1 px-4 rounded-sm" :""}>All</button>
        <button onClick={()=>setMenu('Technology')} className= {menu==="Technology"? "bg-black text-white py-1 px-4 rounded-sm" :""}>Technolgy</button>
        <button onClick={()=>setMenu('Lifestyle')} className= {menu==="Lifestyle"? "bg-black text-white py-1 px-4 rounded-sm" :""}>Lifestyle</button>
        <button onClick={()=>setMenu('Startup')}  className= {menu==="Startup"? "bg-black text-white py-1 px-4 rounded-sm" :""}>Startup</button>
        </div>
<div className=' flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:24'>
    {/* FETCHING FROM JSON I.E ASSESTS FILE... FRONTEND */}
    {/* {blog_data.filter((item)=> menu==="All"?true: item.category===menu).map((item, index)=>{
        return <BlogItem key={index} image ={item.image} title={item.title} description={item.description} category={item.category} id={item.id}/> 
    */}

    {/* FETCH FROM DB..... BACKEND */}
   {blogs.filter((item)=> menu==="All"?true: item.category===menu).map((item, index)=>{
        return <BlogItem key={index} image ={item.image} title={item.title} description={item.description} category={item.category} id={item._id}/>
    
    })}
</div>
    </div>
  )
}

export default blogLists