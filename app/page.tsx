import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import Products from "@/sections/Products";
import WhyChoose from "@/sections/WhyChoose";
import Inspiration from "@/sections/Inspiration";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import CtaBanner from "@/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <WhyChoose />
      <Inspiration />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
