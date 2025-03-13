import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import ProductGrid from "@/components/Products";
import FruitBundleOffer from "@/components/SpecialOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full">
      <Banner/>
      <ProductGrid/>
     <AboutUs/>
     <FruitBundleOffer/>

    </div>
  );
}
