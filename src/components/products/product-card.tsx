"use client";

import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  images: string[];
  brand: string;
  slug: string;
  soldOut?: boolean;
}

export function ProductCard({ id, title, price, images, brand, slug, soldOut = false }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <div className="group block">
      <div
        className="relative aspect-[4/5] bg-gray-100 mb-2 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="object-cover object-center w-full h-full transition-all duration-500 group-hover:scale-105"
        />
        {soldOut && (
          <div className="absolute top-0 right-0 bg-black text-white py-1 px-3 text-xs uppercase">
            Sold Out
          </div>
        )}
      </div>
      <div className="product-brand">{brand}</div>
      <h3 className="product-title">{title}</h3>
      <div className="product-price">$ {price}</div>
    </div>
  );
}
