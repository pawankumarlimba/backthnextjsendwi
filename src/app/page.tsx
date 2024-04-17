import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/herosection";
import Navbar2 from "@/components/ui/Navbar2";



export default function Home() {
  return (
    <>
    <div className="bg-black/[0.9]">
    <div  className="text-white mt-6 mb-4 ">
      <div className="hidden lg:flex flex-grow">
      <Header/></div>
  
    <div className="block lg:hidden">
      <Navbar2/>
    </div>  </div>
    <div className="flex flex-col items-center ">
    
    <Herosection/>
    <Footer/>
    
    </div></div>
    </>
  );
}
