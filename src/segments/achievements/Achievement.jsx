import { useRef, useState } from "react";
import "./acheivement.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Achievement = () => {
  const container = useRef(null);
  const [clients, setclients] = useState(0);
  const [satisfaction, setsatisfaction] = useState(0);
  const [projects, setprojects] = useState(0);
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.3,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
            onEnter: () => {
              setTimeout(() => {
                setclients(12);
                setsatisfaction(8);
                setprojects(15);
              }, 3000);
            },
          },
        })
        .fromTo(
          "#achievement .achievement",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );
  return (
    <section id="achievement" ref={container}>
      <div className="container">
        <div className="achievement">
          <p className="sub-title">Trusted By</p>
          <Odometer className="title" value={clients} />
          <p className="sub-title">Clients</p>
          <p className="description">
            Building lasting partnerships through reliable IT services.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Clients With</p>
          <Odometer className="title" value={satisfaction} />
          <p className="sub-title">Satisfaction</p>
          <p className="description">
            Delivering IT solutions that boost productivity.{" "}
          </p>
        </div>
        <div className="achievement">
          <p className="sub-title">Deployed </p>
          <Odometer className="title" value={projects} />
          <p className="sub-title">IT Infrastructures</p>
          <p className="description">
            Delivered robust IT systems for businesses worldwide.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
