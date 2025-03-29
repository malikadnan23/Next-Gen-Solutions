import "./hero.css";
import { convertHexToRgba } from "../../util";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-scroll";
import heroImage from "../../assets/hero.png";
import BoxAnimation from "../../assets/BoxAnimation";
import { useEffect } from "react";
import gsap from "gsap";
const Hero = () => {
  useEffect(() => {
    gsap
      .timeline({ delay: 0.3 })
      .fromTo(
        "#hero .hero-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo("#hero .hero-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#hero .hero-img", { y: -20, opacity: 0 }, { y: 0, opacity: 11 })
      .fromTo("#hero .hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        "#hero .buttons-wrapper",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  });
  return (
    <section id="hero">
      <BoxAnimation />
      <div className="container">
        <div>
          <h4
            className="text-primary hero-subtitle"
            style={{ background: convertHexToRgba("--primary", 0.2) }}
          >
            Digital Innovation And Expansion
          </h4>
          <h1 className="hero-title">
            Build, Innovate, And Transform with Us.
          </h1>
          <p className="hero-desc">
            Next Gen Solutions brings your ideas to life with custom software, web, and
            mobile solutions. From concept to launch, we drive your business
            forward.
          </p>
          <div className="buttons-wrapper">
            <Link to="contact" smooth={true} className="btn primary">
              Get Started
              <FaArrowTrendUp />
            </Link>
            <Link to="portfolio" smooth={true} className="btn">
              See Our project
              <FaProjectDiagram />
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
