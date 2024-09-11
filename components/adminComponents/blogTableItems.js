import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const blogTableItems = ({authorImg, title, author, date}) => {
    const BlogDate = new Date(date);
  return (
   <tr className=' bg-white border-b'>
    <th scope='row' className=' items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900 whitespace-nowrap'>
    <Image src={authorImg? authorImg: assets.blogger}/>
    </th>
        <td className='px-6 py-4'>
            {title?title : "no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td className='px-6 py-4 cursor-pointer'>
            x
        </td>
   </tr>
  )
}

export default blogTableItems