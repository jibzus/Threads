import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/products/product-card";

// Mock product data based on the Fear of God ESSENTIALS collection
const products = [
  {
    id: "1",
    title: "Classic Hoodie",
    price: 130,
    images: [
      "https://ext.same-assets.com/3904547221/3085898279.jpeg",
      "https://ext.same-assets.com/476542354/77046714.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6110202041-classic-hoodie-jet-black"
  },
  {
    id: "2",
    title: "Classic Sweatpant",
    price: 110,
    images: [
      "https://ext.same-assets.com/2617969028/1992088680.jpeg",
      "https://ext.same-assets.com/2870346412/1613047803.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6103421020-classic-sweatpant-jet-black"
  },
  {
    id: "3",
    title: "Classic Short Sleeve Tee",
    price: 70,
    images: [
      "https://ext.same-assets.com/4058326761/2831797542.jpeg",
      "https://ext.same-assets.com/562005695/1766616781.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6109100012-classic-short-sleeve-tee-jet-black"
  },
  {
    id: "4",
    title: "Classic Crewneck Sweatshirt",
    price: 120,
    images: [
      "https://ext.same-assets.com/1811641351/607713710.jpeg",
      "https://ext.same-assets.com/2754329511/3847692952.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6110202041-classic-crewneck-sweatshirt-jet-black"
  },
  {
    id: "5",
    title: "Classic Full Zip-Up Hoodie",
    price: 140,
    images: [
      "https://ext.same-assets.com/1888540865/1108538094.jpeg",
      "https://ext.same-assets.com/3212531678/1289262937.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6101200010-classic-full-zip-up-hoodie-jet-black"
  },
  {
    id: "6",
    title: "Classic Long Sleeve Tee",
    price: 80,
    images: [
      "https://ext.same-assets.com/1224694907/3949160558.jpeg",
      "https://ext.same-assets.com/3315877114/2745375412.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6110202069-classic-long-sleeve-tee-jet-black"
  },
  {
    id: "7",
    title: "Textured Nylon Halfzip Pullover",
    price: 225,
    images: [
      "https://ext.same-assets.com/3841245974/2271148708.jpeg",
      "https://ext.same-assets.com/85931574/660603735.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-f24-textured-nylon-halfzip-pullover-202bt246350f"
  },
  {
    id: "8",
    title: "Textured Nylon Trackpant",
    price: 150,
    images: [
      "https://ext.same-assets.com/1884223634/1603434673.jpeg",
      "https://ext.same-assets.com/1243415813/680856600.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-f24-textured-nylon-trackpant-130bt244730f",
    soldOut: true
  },
  {
    id: "9",
    title: "Waffle Crewneck Sweater",
    price: 100,
    images: [
      "https://ext.same-assets.com/3042248523/1670522169.jpeg",
      "https://ext.same-assets.com/4289231786/80332584.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-f24-waffle-crewneck-sweater-192bt246130f"
  },
  {
    id: "10",
    title: "Classic Sweatshort",
    price: 80,
    images: [
      "https://ext.same-assets.com/2683199476/3426343448.jpeg",
      "https://ext.same-assets.com/1699875423/3055344909.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6103421050-classic-sweatshorts-jet-black"
  },
  {
    id: "11",
    title: "Classic Short Sleeve Tee",
    price: 70,
    images: [
      "https://ext.same-assets.com/489978436/1293197437.jpeg",
      "https://ext.same-assets.com/3942696558/3468808815.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6109100012-classic-short-sleeve-tee-bright-white"
  },
  {
    id: "12",
    title: "Classic Long Sleeve Tee",
    price: 80,
    images: [
      "https://ext.same-assets.com/2579270355/4002431269.jpeg",
      "https://ext.same-assets.com/595443954/275192772.jpeg"
    ],
    brand: "ESSENTIALS",
    slug: "essentials-6110202069-classic-long-sleeve-tee-bright-white"
  }
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
