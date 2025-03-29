import "./navbar.css";
import gsap from "gsap";
import Datawave from "../../components/Datawave";
import { Link } from "react-scroll";
import { navRoutes } from "../../data";
import Social from "../../components/Socials/Social";
import { CiMenuFries } from "react-icons/ci";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMemo, useState } from "react";
import { convertHexToRgba } from "../../util";
import { useEffect } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropNavbar = () => {
    if (window.scrollY > 200) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  useMemo(() => {
    window.addEventListener("scroll", dropNavbar);
    return () => window.removeEventListener("scroll", dropNavbar);
  });
  useEffect(() => {
    gsap
      .timeline({ delay: 0.3 })
      .fromTo("#navbar .logo", { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#navbar .socials", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        "#navbar .route-wrapper .route",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2 }
      );
  });
  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}
      <nav
        id="navbar"
        className={drop ? "blur drop" : ""}
        style={{
          background: convertHexToRgba("--bg-base", 0.8),
        }}
      >
        <Datawave />
        <div className="route-wrapper">
          {navRoutes.map((route, index) => (
            <Link
              to={route.id}
              className="route"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-50}
              key={index}
            >
              {route.name}
            </Link>
          ))}
        </div>
        {/* Social Media */}
        <Social />
        <div className="menu" onClick={() => setOpen(!open)}>
          <CiMenuFries />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
