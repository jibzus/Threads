"use client";

import { MainNav } from "./main-nav";
import { CategoryNav } from "./category-nav";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <MainNav />
      <CategoryNav />
    </header>
  );
}
