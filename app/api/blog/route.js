import { connectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/blogs.models";

// import {write} from  'fs/promises'

// STORE DATA in DB
const loadDB = async()=>{
  await connectDB()
}
loadDB()

// TESTING APIS USING GET ALL REQUEST
export async function GET (request){
  const blogs = await BlogModel.find({})
  return NextResponse.json({blogs})
}
// API ENDPOINT FOR UPLOADING BLOGS



// TESTING APIS USING POST REQUEST OF STORING IMAGES IN PUBLIC FOLDER WITH VAR NAME OF "image in line 22"
export async function POST (request){
  const formData = await request.formData()
  const timestamp = Date.now()

  const image = formData.get("image")
  const imageByteData = await image.arrayBuffer()
  const buffer = Buffer.from(imageByteData)
  const path = `./public/${timestamp}_${image.name}`
  await writeFile(path,buffer)
  const imgUrl = `/${timestamp}_${image.name}`
  // console.log("imgUrl");
  // return NextResponse.json({imgUrl})for image testing

  // TESTING APIS USING GET REQUEST OF STORING DATA AND IMAGES DATABASE WITH VAR NAME OF "image in line 22"
// THIS WILL REFLECT AT THE CLIENT SIDE
  const blogData = {
    title: `${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl.get}`,
    authorImg: `${formData.get('authorImg')}`,
  }
  await BlogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({success:true, msg:"blog added"})
  
  
  
}