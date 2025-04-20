"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-4 px-4 lg:px-8 relative">
      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex space-x-4">
          <Link href="/shop" className="nav-link">
            Shop
          </Link>
          <Link href="/private-label" className="nav-link">
            Private Label
          </Link>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="button-reset">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <div className="flex flex-col space-y-6 p-4">
              <Link href="/shop" className="nav-link" onClick={() => setOpen(false)}>
                Shop
              </Link>
              <Link href="/private-label" className="nav-link" onClick={() => setOpen(false)}>
                Private Label
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="absolute left-0 right-0 mx-auto flex justify-center pointer-events-none">
        <Link href="/" className="flex-none text-center pointer-events-auto">
          <h1 className="text-xl font-normal tracking-wider">Threads By Cadogan</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-4 w-[120px]">
        {/* Empty div with width to balance the left side for proper centering */}
      </div>
    </nav>
  );
}
