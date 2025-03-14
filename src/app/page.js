import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import ProductGrid from "@/components/Products";
import FruitBundleOffer from "@/components/SpecialOffer";


export default function Home() {
  return (
    <div className="">
      <Banner/>
      <ProductGrid/>
     <AboutUs/>
     <FruitBundleOffer/>

    </div>
  );
}
