import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
