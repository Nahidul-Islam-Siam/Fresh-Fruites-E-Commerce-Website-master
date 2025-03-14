import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import BlogSection from "@/components/Blog";
import ProductGrid from "@/components/Products";
import FruitBundleOffer from "@/components/SpecialOffer";
import TestimonialSection from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="">
      <Banner/>
      <ProductGrid/>
     <AboutUs/>
     <FruitBundleOffer/>
     <TestimonialSection/>
<BlogSection/>

    </div>
  );
}
