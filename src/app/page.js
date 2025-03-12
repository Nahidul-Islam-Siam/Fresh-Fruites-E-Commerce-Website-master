import AboutUs from "@/components/About";
import ProductGrid from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full">
     <AboutUs/>
     <ProductGrid/>
    </div>
  );
}
