"use client"
import Navbar3 from "@/components/Navbar3";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useEffect, useState } from "react";
interface ourartsProps {
  handleChangeState: (newValue: boolean) => void;
}
const page: React.FC<ourartsProps> = ({ handleChangeState }) => {
  // Retrieve isLoggedIn value from local storage
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : true;
  });
   handleChangeState = (newValue: boolean) => {
    setIsLoggedIn(newValue);
  };
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      handleChangeState(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  return (
    <>
    <div className="bg-white ">
    <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
    </div>
    <div className="p-12 bg-white p-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
       <div className="text-center">
        
        <p className="mt-2 text-2xl sm:text-3xl text-blue-900 lg:sm:text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">Our Arts</p>
       </div>
       <div className="mt-10"><HoverEffect items={hovercard.map(webinar=>({
        title:webinar.title,
        description:webinar.description,
        link:webinar.link,
        id:webinar.id,
       }))} /></div>
       </div></div>

    </>
  )
}
const hovercard = [
    { id:"1",
      title: "49",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/uploads/member-2.jpg",
    },
    {
      id:"2",
      title: "49",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "/uploads/member-2.jpg",
    },
    {
      id:"3",
      title: "49",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "/uploads/member-2.jpg",
    },
    {
      id:"4",
      title: "49",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "/uploads/member-2.jpg",
    },
    {
      id:"5",
      title: "49",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "/uploads/member-2.jpg",
    },
    {
      id:"6",
      title: "49",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "/uploads/member-2.jpg",
    },
  ];
export default page