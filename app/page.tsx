import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Partners from "../components/Partners";
import AccredianEdge from "../components/AccredianEdge";
import Domains from "../components/Domains";
import Programs from "../components/Programs";
import Audience from "../components/Audience";
import CATFramework from "../components/CATFramework";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <AccredianEdge />
      <Domains />
      <Programs />
      <Audience />
      <CATFramework />
      <Testimonials />
      <FAQ />
      <EnquiryForm />
      <Footer />
    </main>
  );
}