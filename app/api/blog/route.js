import { connectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/blogs.models";


// TESTING DB CONNECTION
// export async function GET(request){
//   console.log("blog hitted");
//   return NextResponse.json({msg: "working"})
// }

// STORE DATA in DB
const loadDB = async()=>{
  await connectDB()
}
loadDB()

//  POST REQ 4 STORING IMAGES using URL IN DB $ storing imgs IN PUBLIC FOLDER WITH FIELD NAME OF"image"  $ 4 DATAS in DB 
// LINE 21 -32 FOR GENERATING IMAGE URL LINE 34-45 4 POSTING REMAININ DATAS
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
  // return NextResponse.json({imgUrl})

  const blogData = {
    title: `${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`,
  }
  await BlogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({success:true, msg:"blog added"})
}

// APIS ENDPOINT TO GET ALL REQUEST
export async function GET (request){
  const blogs = await BlogModel.find({})
  return NextResponse.json({blogs})
}

// export async function GET(request){
//   const blogId = request.nextUrl.searchParams.get("id");
//   if(blogId){
//     const blog = await BlogModel.findById(blogId)
//     return NextResponse.json(blog)
//   }
//   else{
//     const blogs = await BlogModel.find({})
//     return NextResponse.json({blogs})
//   }

// }




  // TESTING APIS USING GET REQUEST OF STORING DATA AND IMAGES DATABASE WITH VAR NAME OF "image in line 22"
// THIS WILL REFLECT AT THE CLIENT SIDE
 
  
  
// }