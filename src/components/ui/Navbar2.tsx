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

function Navbar2() {
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
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
               <Link href={"/singup"}>
                <span>Signup</span></Link>
                
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link href={"/login"}>
                <span>Login</span></Link>
                
              </DropdownMenuItem>
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