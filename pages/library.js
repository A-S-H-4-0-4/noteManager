import React, { useState } from "react";
import { useSession, session } from 'next-auth/react'
import { SessionProvider } from "next-auth/react"
import ResponsiveAppBar from "../components/navbar";
import Head from "next/head";
const library = () => {

  const { data: session, status } = useSession({ required: true })
  const [blockList, setBlockList] = useState([]);
  const [images, setImages] = useState([]);
  const [removeImage, setRemoveImage] = useState(null);

  if (session){
  const handelRemoveImg = (imgObj) => {
  }
  const handelOpenWidget = () => {
    return () => {
      var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dnhhhfq9q',
        uploadPreset: 'docimages'
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }])
          console.log({ setImages })
        }
      }
      )
      myWidget.open(); // open widget
    }
  }
  return (

    <>
      <Head>
        <title>How to Crop and Resize Image in the Browser</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Head>
      <ResponsiveAppBar />
      <button onClick={handelOpenWidget()} style={{ color: 'white' }}>{session.user.name}</button>
      <div style={{ backgroundColor: 'white', height: '100px' }}>

        {images.map((image) => (
          <div> <img src={image.url}></img> </div>
        ))}



      </div>

    </>
  )
}
}

export default library