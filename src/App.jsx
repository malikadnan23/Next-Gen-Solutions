import About from "./segments/about/About";
import Achievement from "./segments/achievements/Achievement";
import Hero from "./segments/hero/Hero";
import Navbar from "./segments/Navbar/Navbar";
import Portfolio from "./segments/portfolio/Portfolio";
import Services from "./segments/services/Services";
import "swiper/css";
// import Testimonials from "./segments/testimonials/Testimonials";
import Contact from "./segments/contact/Contact";
import Footer from "./segments/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
