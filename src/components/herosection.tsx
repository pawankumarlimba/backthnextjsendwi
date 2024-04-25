// Herosection.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar3 from "./Navbar3";

interface HerosectionProps {
  handleChangeState: (newValue: boolean) => void;
}

const Herosection: React.FC<HerosectionProps> = ({ handleChangeState }) => {
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
      <div className="relative">
        <img className="sm:min-h-screen w-[100vw] " src="/uploads/herosection.png" alt="" />
        <div className="absolute top-5 left-[3vw] flex items-center">
          {/* Pass isLoggedIn to Navbar3 */}
          <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
        </div>
        <div className="flex flex-row absolute sm:bottom-[40vh] sm:left-[17vw] bottom-[10vh]  left-[22vw] gap-4">
          <Link href={"/ourarts"}>
            <button className="rounded-full pl-3 pr-3 py-2 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 text-black flex items-center sm:ml-[15vw] sm:mt-[4vh] text-xs font-bold " style={{ backgroundColor: '#eeb25c' }}>
              <span>OUR ARTS</span>
            </button>
          </Link>
          <Link href={"/uploadarts"}>
          <button className="rounded-full pl-3 pr-3 py-2 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 text-black flex items-center sm:ml-[15vw] sm:mt-[4vh] text-xs font-bold " style={{ backgroundColor: '#eeb25c' }}>
              <span>UPLOAD ARTS</span>
            </button>
            </Link>
        </div>
        <div className="absolute bottom-0 right-0">
          <img className="h-[10vh] sm:h-[30vh] lg:h-[40vh]" src="/uploads/logo1.png" alt="" />
        </div>
        <div className="absolute bottom-0 lift-0">
          <img className="h-[10vh] sm:h-[30vh] lg:h-[40vh]" src="/uploads/logo2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
