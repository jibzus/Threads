"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function CategoryNav() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="w-full border-t border-b border-gray-200">
      <div className="container-fog flex items-center justify-between py-3">
        <div className="flex items-center space-x-10">
          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-xs uppercase tracking-wider font-light p-0 h-auto">
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <div className="pt-8">
                <h3 className="uppercase text-sm mb-6">Refine By</h3>

                <div className="border-t border-gray-200 py-4">
                  <h4 className="uppercase text-xs mb-3">Product Type</h4>
                  <div className="flex flex-col space-y-2 text-xs">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>BOTTOMS</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>HOODIEs</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>T-SHIRT</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-4">
                  <h4 className="uppercase text-xs mb-3">Sizes</h4>
                  <div className="flex flex-col space-y-2 text-xs">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>S</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>M</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>L</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>XL</span>
                   </label>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-4">
                  <h4 className="uppercase text-xs mb-3">Color</h4>
                  <div className="flex flex-col space-y-2 text-xs">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Black</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>White</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Cream</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Navy Blue</span>
                    </label>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button
                    variant="outline"
                    className="flex-1 text-xs uppercase tracking-wider rounded-none font-light"
                    onClick={() => setFilterOpen(false)}
                  >
                    Show Results
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-xs uppercase tracking-wider font-light"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="relative">
          <select className="appearance-none bg-transparent border-none text-xs uppercase tracking-wider font-light pr-6 cursor-pointer">
            <option>Relevance</option>
            <option>Best selling</option>
            <option>Price ascending</option>
            <option>Price descending</option>
          </select>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
