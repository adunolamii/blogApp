"use client"
import React from 'react'
import SubsTableItem from '@/components/adminComponents/subsTableItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

const page = () => {
  const [emails, setEmails] = useState([])
  
  const fetchEmails = async ()=>{
    const response = await axios.get("/api/email")
    setEmails(response.data.emails)
  }
  
  const deleteEmail = async (mongoId)=>{
    const response = await axios.delete("/api/blog", {params:{id:mongoId}})
    toast.success(response.data.msg);
    if (response.data.success){
      toast.success(response.data.msg);
      setEmails();
      }
      else{
        toast.error("error")
      }
    fetchEmails();
  }
  useEffect(() => {
    fetchEmails()
  }, [])
  
  return (
    <div className=' flex pt-5 px-5 sm:pt-12 sm: pl-16'>
      <h1>All Subscription</h1>
      <div className=' relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
      <table className=' w-full text-sm text-gray-500'>
        <thead className=' text-sm text-left text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Email Subscription
            </th>
            <th scope='col' className='hidden sm:block px-6 py-3'>
              Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            emails.map((item, index)=>{
              return <SubsTableItem key={index} mongoId={item.id} email={item.email} date={item.date} deleteEmail={deleteEmail}/>

              
            })
          }
          
        </tbody>

      </table>
      </div>
    
    
    </div>
  )
}

export default page