import React from 'react'

const subsTableItem = ({email, mongoId}) => {
  const emailData = new Date(date)
  return (
    <tr className=' bg-white border-b text-left'>subsTableItem
        <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email: "no email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailData.toDateString()}</td>
        <td className=' px-6 py-4 cursor-pointer'>x</td>
    </tr>
  )
}

export default subsTableItem