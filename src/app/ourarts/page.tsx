"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
function page() {
  return (
    <>
    <div className="p-12 bg-gradient-to-r from-blue-200 to-white p-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
       <div className="text-center">
        
        <p className="mt-2 text-2xl sm:text-3xl text-blue-900 lg:sm:text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">Our Arts</p>
       </div>
       <div className="mt-10"><HoverEffect items={hovercard.map(webinar=>({
        title:webinar.title,
        description:webinar.description,
        link:webinar.link,
       }))} /></div>
       </div></div>

    </>
  )
}
const hovercard = [
    {
      title: "49",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/uploads/member-2.jpg",
    },
    {
      title: "49",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "/uploads/member-2.jpg",
    },
    {
      title: "49",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "/uploads/member-2.jpg",
    },
    {
      title: "49",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "/uploads/member-2.jpg",
    },
    {
      title: "49",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "/uploads/member-2.jpg",
    },
    {
      title: "49",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "/uploads/member-2.jpg",
    },
  ];
export default page