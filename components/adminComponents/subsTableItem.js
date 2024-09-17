import React from 'react'

const subsTableItem = ({email, mongoId, deleteEmail}) => {
  const emailDate = new Date();
  
  return (
    <tr className=' bg-white border-b text-left'>subsTableItem
        <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email: "no email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={()=>deleteEmail(mongoId)} className=' px-6 py-4 cursor-pointer'>x</td>
    </tr>
  )
}

export default subsTableItem