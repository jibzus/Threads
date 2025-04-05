"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-4 px-4 lg:px-8">
      <div className="flex items-center space-x-6">
        <Link href="/" className="hidden lg:block nav-link">
          FEAR OF GOD
        </Link>
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
              <Link href="/" className="nav-link" onClick={() => setOpen(false)}>
                FEAR OF GOD
              </Link>
              <Link href="/collections/essentials" className="nav-link" onClick={() => setOpen(false)}>
                ESSENTIALS
              </Link>
              <Link href="/collections/athletics" className="nav-link" onClick={() => setOpen(false)}>
                ATHLETICS
              </Link>
              <div className="mt-8">
                <h3 className="text-xs uppercase mb-2 opacity-70">Shop</h3>
                <div className="flex flex-col space-y-3">
                  <Link href="/collections/essentials-men" className="nav-link text-xs" onClick={() => setOpen(false)}>
                    SHOP MENS
                  </Link>
                  <Link href="/collections/essentials-women" className="nav-link text-xs" onClick={() => setOpen(false)}>
                    SHOP WOMENS
                  </Link>
                  <Link href="/collections/essentials-kids" className="nav-link text-xs" onClick={() => setOpen(false)}>
                    SHOP KIDS
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 flex justify-center">
        <Link href="/" className="flex-none text-center">
          <h1 className="text-xl font-normal tracking-wider">FEAR OF GOD</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/collections/essentials" className="nav-link">
            ESSENTIALS
          </Link>
          <Link href="/collections/athletics" className="nav-link">
            ATHLETICS
          </Link>
        </div>
        <Link href="/search" className="button-reset">
          <span className="sr-only">Search</span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </Link>
        <Link href="/account" className="button-reset">
          <span className="sr-only">Account</span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </Link>
        <Link href="/cart" className="button-reset flex items-center">
          <span className="sr-only">Cart</span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span className="ml-1 text-xs">0</span>
        </Link>
      </div>
    </nav>
  );
}
