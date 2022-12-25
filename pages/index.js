// react
import { useEffect } from "react";

// next
import {useRouter} from 'next/router'



export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/library")
    return ()=>{}
  },[])
  return (
   <div></div>
  )
}
