import Social from "../../components/Socials/Social";
import { contactInfo } from "../../data";
import { cssPerfectShape } from "../../util";
import "./contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
const Contact = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.3,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          ["#contact .contact-info-wrapper .contact-info"],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          ["#contact .socials .icon"],
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          [
            "#contact form h2",
            "#contact form description",
            "#contact form .control",
            "#contact form .btn",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );
  return (
    <section id="contact" ref={container}>
      <div className="container">
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>
              <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                <info.icon />
              </div>
              <div className="info">
                <h3>{info.title}</h3>
                <p className="description">{info.description}</p>
                <h4 className="value">{info.value}</h4>
              </div>
            </div>
          ))}
          <Social />
        </div>

        <form action="">
          <div className="top">
            <h2>Get in Touch</h2>
            <p className="description">
              Have a project in mind or need expert advice? We&apos;re here to
              help! Reach out to our team for personalized consultations,
              inquiries, or to start your next big project today.
            </p>
          </div>
          <div className="middle">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="fullname"
              className="control"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              className="control"
            />{" "}
            <input
              type="tel"
              placeholder="Enter Your Telephone"
              name="tel"
              className="control"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="control"
            ></textarea>
          </div>
          <div className="bottom">
            <button type="button" className="btn primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
