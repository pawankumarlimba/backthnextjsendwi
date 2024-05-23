"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
 




function page() {
    return (
    <>
     <div className="bg-white min-h-screen min-w-screen ">
      <div className="hidden sm:flex flex-grow"><HeroParallax products={products}/>;</div>
      <div className="block sm:hidden">
          <div className="min-h-screen  pt-15 ">
          <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-vlack pt-6"> Admin Dashbord</h1>
          <h2 className="text-center text-teal-600 font-semibold tracking-wide uppercase">manage like a boss with your personal special Dashbord</h2>
          <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Add new Admin
        </p>

        <Image
          src={"/uploads/1.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <Link href={"/admindashbord/signup"}>
        <button className="rounded-full pl-4 pr-1 py-1 text-white text-center flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button></Link>
        </BackgroundGradient>
 
          
          
        </div>
        <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Varify Arts
        </p>

        <Image
          src={"/uploads/3.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button>
        </BackgroundGradient>
 
          
          
        </div>
        <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Delete User Acount
        </p>

        <Image
          src={"/uploads/4.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button>
        </BackgroundGradient>
 
          
          
        </div>
        <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Add New team Member
        </p>

        <Image
          src={"/uploads/2.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button>
        </BackgroundGradient>
 
          
          
        </div>
        <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Delete User Art
        </p>

        <Image
          src={"/uploads/5.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button>
        </BackgroundGradient>
 
          
          
        </div>
        <div className="mt-6 flex justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
          Remove Team Member
        </p>

        <Image
          src={"/uploads/6.png"}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>click here</span>
      
        </button>
        </BackgroundGradient>
 
          
          
        </div>
          
          </div>
      </div>
     
     </div>

    </>
    )
  }
  

  export default page




  export const products = [
    
    {
      title: "Add new Admin",
      link: "/admindashbord/signup",
      thumbnail:
        "/uploads/1.png",
    },
    {
      title: "Varify Arts",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "/uploads/3.png",
    },
    {
      title: "Delete User Acount",
      link: "/uploads/4.png",
      thumbnail:
        "/uploads/4.png",
    },
    {
      title: "Add New team Member ",
      link: "https://renderwork.studio",
      thumbnail:
        "/uploads/2.png",
    },
   
    {
      title: "Delete User Art",
      link: "https://cremedigital.com",
      thumbnail:
        "/uploads/5.png",
    },
    {
      title: "Remove Team Member",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "/uploads/6.png",
    },
    
  ];