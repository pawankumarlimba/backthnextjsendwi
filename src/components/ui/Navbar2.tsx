"use client"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"

import axios from "axios"
import { toast } from "react-toastify"
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "@/helpers/Localstorege"
import { useEffect, useState } from "react"


const Navbar2= () => {
  // Retrieve isLoggedIn value from local storage
  
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <div className="  ">
           
            <Button className="bg-black/[0.85] text-1.5xl ml-[5vw] border-none pl-[5vw]" variant="outline">=</Button></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>

            {!token && (<>
              <DropdownMenuItem> 
                <User className="mr-2 h-4 w-4" />
               <Link href={"/singup"}>
                <span>Signup</span></Link>
                
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link href={"/login"}>
                <span>Login</span></Link>
                
              </DropdownMenuItem></>)}
              {token && (<>
              <DropdownMenuItem> 
                <User className="mr-2 h-4 w-4" />
               <Link href={"/singup"}>
                <span>order</span></Link>
                
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <button onClick={handleLogout } ><span>Logout</span></button>
                
                
              </DropdownMenuItem></>)}
              <DropdownMenuItem>
              
                <User className="mr-2 h-4 w-4" />
                <Link href={"/about"}> <span>About</span>
                </Link>
              </DropdownMenuItem>
              
              
            </DropdownMenuGroup>
            
           
            
           
           


            
            




          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

export default Navbar2