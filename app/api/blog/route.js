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

// TESTING APIS USING GET REQUEST
export async function GET (request){
  return NextResponse.json({msg: "testing APi"})
}
// TESTING APIS USING POST REQUEST TO IMAGES IN PUBLIC FOLDER WITH VAR NAME OF "image in line 22"
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

  const blogData = {
    title: `${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${formData.get('imgUrl')}`,
    authorImg: `${formData.get('authorImg')}`,
  }
  await BlogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({success:true, msg:"blog added"})
  
  
  // return NextResponse.json({imgUrl}) for image testing
  
}