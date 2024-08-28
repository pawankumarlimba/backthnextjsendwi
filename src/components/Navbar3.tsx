// Navbar3.tsx
'use client'
import React, {  useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "./ui/navbar-menu"; // Make sure to import HoveredLink and ProductItem if used
import { cn } from "@/utils/cn";

import axios from "axios";
import { toast } from "react-toastify";
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "@/helpers/Localstorege";


const Navbar3 = () => {
  const [active, setActive] = useState<string | null>(null);
  
  


  
   
  const [token,settoken]=useState<string | null>(null);
  useEffect(() => {
    const storedToken = getTokenFromLocalStorage();
    settoken(storedToken);
  }, []);
 
  const handleLogout =async () => {
    try {
      const response=await axios.get('/api/user/logout');
       
      if(response.data.success===true)
      {
       removeTokenFromLocalStorage();
        settoken(null);
    
       
        toast.success("user logout succesfully");
        console.log(response);
      
      }
      else{
        toast.error("something is wrong")
      }
      
    } catch (error) {
      toast.error("internal error ")
      console.log(error)
    }
    // Redirect to the home page after logout
    
  };


  return (
    <div className={cn("some-class", "")}>
    <div className="bg-transparent">
      <div className={cn("sm:w-[90vw] lg:w-[90vw] top-10 inset-x-0 mx-auto z-50 flex flex-row pt-5 hidden sm:flex flex-grow")}>
        <Menu setActive={setActive}>
          <h1>AAKARITI-RACHNA</h1>
          <h1 className="ml-[3vw]">|</h1>
          <div className="ml-10 mr-10">
            <Link href={'/'}>
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
          </div>
          {!token && (
              <>
                <Link href={'/singup'}>
                  <MenuItem setActive={setActive} active={active} item="Signup" />
                </Link>
                <Link href={'/login'}>
                  <MenuItem setActive={setActive} active={active} item="Login" />
                </Link>
              </>
            )}
            {token && (
              <>
                <Link href={'*'}>
                  <MenuItem setActive={setActive} active={active} item="Order" />
                </Link>
                
                  <button onClick={handleLogout }>
                  <MenuItem setActive={setActive}  active={active} item="Logout" /></button>
              
              </>
            )}
            
          <Link href={'/about'}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
         
        </Menu>
      </div>
    </div></div>
  );
};

export default Navbar3;
