"use client"
import Header from "@/components/header";
import BlogLists from "@/components/blogLists";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function Home() {
  return (
   <div>
    <ToastContainer theme="dark"/>
    <Header/>
    <BlogLists/>
    <Footer/>
   </div>  );
}
