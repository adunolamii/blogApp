import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const footer = () => {
  return (
    <div className=' flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.blogger} alt='' width={120}/>
        <p  className=' text-sm text-white'>All right reserved. Copyright @blogger</p>
<div className=' flex '>
     <Image src={assets.fbk} alt='' width={40}/>
     <Image src={assets.ig} alt='' width={40}/>
     <Image src={assets.twitter} alt='' width={40}/>
</div>
    </div>
  )
}

export default footer