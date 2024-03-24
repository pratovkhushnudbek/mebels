import About from "@/components/About";
import Companies from "@/components/Companies";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Subscribe from "@/components/Subscribe";



export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Companies/>
    <About/>
    <Popular/>
    <Customers/>
    <Subscribe/>
    <Footer/>
    </>
  );
}
