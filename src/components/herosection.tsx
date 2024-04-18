"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";




function Herosection() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-black h-auto w-[90vw]  sm:w-[100vw]   md:w-[90vw]   lg:w-[95vw] overflow-hidden mx-auto py-10 md:py-0 rounded-md bg-gray-200 p-4 sm:mb-3 md:m-2 lg:rounded[20%]"> 
    <img className=" rounded-md w-[90%] h-[80%] mt-8 mb-4" src="/uploads/forntpic.png" alt="" />
    
    <div className="grid sm:grid-cols-2  py-10 max-w-[90%] ">
     <h2 className="hidden sm:flex flex-grow">Get started</h2>
      <h1 className="font-bold text-xl sm:text-3xl">Visit us to see our latest exhibitions and events</h1>
    </div>
     <div className="flex flex-col sm:flex-row gap-5 mb-4">
     <div>
  
      <Link href={"/ourarts"}>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
      >
       Our Arts
      </Button></Link>
    </div>
    <div>
      <Button
        borderRadius="1.75rem" 
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
      >
     Upload your Arts
      </Button>
    </div>
     </div> </div>
     
    </>
  )
}

export default Herosection