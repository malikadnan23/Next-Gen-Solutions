import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonial.css";
import { Autoplay } from "swiper/modules";
import { clientsReviews } from "../../data";
import { convertHexToRgba, cssPerfectShape, starDecoder } from "../../util";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
const Testimonials = () => {
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
          [
            "#testimonial .section-header h3",
            "#testimonial .section-header h2",
            "#testimonial .testimonial",
            "#testimonial .spotlight",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );
  return (
    <section id="testimonial" ref={container}>
      <div className="container">
        <div className="section-header">
          <h3>What Our Clients Say </h3>
          <h2>Trusted Worldwide for Cutting-Edge IT Solutions</h2>
        </div>
        <Swiper
          className="portfolio-wrapper"
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={true}
          loop={true}
          speed={1000}
          grabCursor={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {clientsReviews.map((client, index) => (
            <SwiperSlide
              className="blur testimonial"
              style={{ background: convertHexToRgba("--bg-secondary", 0.5) }}
              key={index}
            >
              <div className="top">
                <p className="content">{client.content}</p>
              </div>
              <div className="bottom">
                <div className="star-container">
                  {starDecoder(client.rating)}
                </div>
                <div style={{ ...cssPerfectShape(60, 60) }} className="profile">
                  <img src={client.image} alt="" />
                </div>
                <h2 className="name">{client.name}</h2>
                <p className="job-title">{client.jobTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
