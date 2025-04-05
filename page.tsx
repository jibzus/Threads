import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/products/product-card";

// Mock product data based on the Threads By Cadogan collection
const products = [
  {
    id: "1",
    title: "Hoodie",
    price: 40,
    images: [
      "https://ext.same-assets.com/3904547221/3085898279.jpeg",
      "https://ext.same-assets.com/476542354/77046714.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-hoodie-black"
  },
  {
    id: "2",
    title: "Sweatpants",
    price: 30,
    images: [
      "https://ext.same-assets.com/2617969028/1992088680.jpeg",
      "https://ext.same-assets.com/2870346412/1613047803.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-sweatpant-black"
  },
  {
    id: "3",
    title: "Short Sleeve Tee",
    price: 15,
    images: [
      "https://ext.same-assets.com/4058326761/2831797542.jpeg",
      "https://ext.same-assets.com/562005695/1766616781.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-short-sleeve-tee-black"
  },
  {
    id: "4",
    title: "Crewneck Sweatshirt",
    price: 35,
    images: [
      "https://ext.same-assets.com/1811641351/607713710.jpeg",
      "https://ext.same-assets.com/2754329511/3847692952.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-crewneck-sweatshirt-black"
  },
  {
    id: "5",
    title: "Zip-Up Hoodie",
    price: 40,
    images: [
      "https://ext.same-assets.com/1888540865/1108538094.jpeg",
      "https://ext.same-assets.com/3212531678/1289262937.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-zip-up-hoodie-jet-black"
  },
  {
    id: "6",
    title: "Long Sleeve Tee",
    price: 20,
    images: [
      "https://ext.same-assets.com/1224694907/3949160558.jpeg",
      "https://ext.same-assets.com/3315877114/2745375412.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-long-sleeve-tee-black"
  },
   {
    id: "7",
    title: "Hoodie",
    price: 40,
    images: [
      "https://ext.same-assets.com/3904547221/3085898279.jpeg",
      "https://ext.same-assets.com/476542354/77046714.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-hoodie-cream"
  },
  {
    id: "8",
    title: "Sweatpants",
    price: 30,
    images: [
      "https://ext.same-assets.com/2617969028/1992088680.jpeg",
      "https://ext.same-assets.com/2870346412/1613047803.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-sweatpant-cream"
  },
  {
    id: "9",
    title: "Short Sleeve Tee",
    price: 15,
    images: [
      "https://ext.same-assets.com/4058326761/2831797542.jpeg",
      "https://ext.same-assets.com/562005695/1766616781.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-short-sleeve-tee-cream"
  },
  {
    id: "10",
    title: "Crewneck Sweatshirt",
    price: 35,
    images: [
      "https://ext.same-assets.com/1811641351/607713710.jpeg",
      "https://ext.same-assets.com/2754329511/3847692952.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-crewneck-sweatshirt-cream"
  },
  {
    id: "11",
    title: "Zip-Up Hoodie",
    price: 40,
    images: [
      "https://ext.same-assets.com/1888540865/1108538094.jpeg",
      "https://ext.same-assets.com/3212531678/1289262937.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-zip-up-hoodie-jet-cream"
  },
  {
    id: "12",
    title: "Long Sleeve Tee",
    price: 20,
    images: [
      "https://ext.same-assets.com/1224694907/3949160558.jpeg",
      "https://ext.same-assets.com/3315877114/2745375412.jpeg"
    ],
    brand: "Threads By Cadogan",
    slug: "TBC-long-sleeve-tee-cream" 
    ];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container-fog py-8">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
