import { assets } from "@/Assets/assets"
import Sidebar from "@/components/adminComponents/sidebar"
import Image from "next/image"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({children}){
    return (
        <>
        <div className=" flex ">
            <ToastContainer theme="dark"/>
            <Sidebar/>

          <div className="flex flex-col w-full">
            <div className=" flex items-center justify-between w-full py-10 max-h-[60px] px-12 border-b border-black">
                <h3 className=" font-medium">Admin Panel</h3>
                <Image className=" rounded" src={ assets.myPic}  width={40} alt=""/>
                </div>
           {children}
            </div>
            
        </div>
        
        </>
    )
}