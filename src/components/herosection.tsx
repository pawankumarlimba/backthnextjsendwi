import React from "react";
import Link from "next/link";
import Navbar3 from "./Navbar3";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Herosection = () => {
  return (
    <>
      <div className="relative">
        <img className="sm:min-h-screen w-[100vw]" src="/uploads/herosection.png" alt="Hero Section" />
        <div className="absolute top-5 left-[3vw] flex items-center">
          <Navbar3 />
        </div>
        <div className="flex flex-row absolute sm:bottom-[40vh] sm:left-[17vw] bottom-[10vh] left-[22vw] gap-4">
          <Link href="/ourarts">
            <button className="rounded-full pl-3 pr-3 py-2 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 text-black flex items-center sm:ml-[15vw] sm:mt-[4vh] text-xs font-bold" style={{ backgroundColor: '#eeb25c' }}>
              <span>OUR ARTS</span>
            </button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button className="rounded-full pl-3 pr-3 py-2 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 text-black flex items-center sm:ml-[15vw] sm:mt-[4vh] text-xs font-bold" style={{ backgroundColor: '#eeb25c' }}>
                <span>UPLOAD ARTS</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload Arts</DialogTitle>
                <DialogDescription>
                  Upload your art here. Click save when you &apos re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Upload Arts</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="absolute bottom-0 right-0">
          <img className="h-[10vh] sm:h-[30vh] lg:h-[40vh]" src="/uploads/logo1.png" alt="Logo 1" />
        </div>
        <div className="absolute bottom-0 left-0">
          <img className="h-[10vh] sm:h-[30vh] lg:h-[40vh]" src="/uploads/logo2.png" alt="Logo 2" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
