import { BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import {
  MdOutlineAlternateEmail,
  MdOutlineSocialDistance,
} from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LiaDigitalOcean } from "react-icons/lia";
import { SiTaichigraphics } from "react-icons/si";
import { IoAppsOutline } from "react-icons/io5";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];

export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];

export const services = [
  {
    title: "Digital Marketing Services",
    description:
      "As a top digital marketing agency, we help businesses leverage the internet to reach the right audience, boost brand visibility, and ensure lasting success.",
    icon: LiaDigitalOcean,
  },
  {
    title: "Custom Website Development",
    description:
      "We build websites that enhance businesses, improve user experience, and streamline operations, including expert WordPress development for startups and established brands.",
    icon: FaCode,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We offer tailored SEO services to enhance your online presence, drive traffic, and boost conversions, with expert UK-based strategies for digital success.",
    icon: BsBarChartLine,
  },
  {
    title: "Graphic Design Services",
    description:
      "Our graphic design services transform your ideas into stunning visuals that attract and convert. Whether you need a modern logo, eye-catching social media graphics, or a full brand makeover, we’ve got you covered.",
    icon: SiTaichigraphics,
  },
  {
    title: "Application Development Services",
    description:
      "We delivers innovative, scalable app development to enhance efficiency, user experience, and growth, providing custom mobile, web, and business software solutions.",
    icon: IoAppsOutline,
  },
  {
    title: "Social Media Marketing Services",
    description:
      "We also offers expert social media marketing to boost traffic, conversions, and brand credibility, helping you engage your target audience effectively.",
    icon: MdOutlineSocialDistance,
  },
];

export const portfolio = [
  {
    title: "Homyz",
    description:
      "Created a real estate app in React, featuring property listings, search filters, and an intuitive user interface.",
    image: portfolio1,
    link: "https://reale-estate-project.netlify.app/",
  },
  {
    title: "Travel Website",
    description:
      "Built a dynamic travel website using React, offering real-time updates, interactive maps, and seamless user experience.",
    image: portfolio2,
  },
  {
    title: "The Fit Club",
    description:
      "Designed a fitness website in React, focusing on workout plans, progress tracking, and interactive user engagement.",
    image: portfolio3,
  },
  {
    title: "E-Commerce Website",
    description:
      "Developed a responsive e-commerce website using HTML, CSS, and JavaScript, featuring seamless navigation and user-friendly design.",
    image: portfolio4,
  },
  {
    title: "AI-Powered Cybersecurity Monitoring System",
    description:
      "Built an AI-driven security monitoring system that detects and responds to threats in real time, ensuring robust protection for client data.",
    image: portfolio5,
  },
  {
    title: "High-Speed Network Infrastructure for Corporate Office",
    description:
      "Implemented a high-speed network infrastructure to boost productivity and connectivity in a large corporate office.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "adnansaeediqbal23@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "53C3+22P, Canal Rd, Bijli Ghar Mayar, Mardan, 23200",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+92 325 5578031",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://web.facebook.com/profile.php?id=61573521770340",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/nextgeninnnovations/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];

export const blogPost = [
  {
    title:
      "Transforming Healthcare with AI: How Next gen Solution is Empowering Better Patient Outcomes",
    content:
      "This blog post explores Next gen Solution’s impact on healthcare through AI-powered solutions, such as predictive analytics and machine learning tools that help medical professionals make data-driven decisions and optimize patient care.",
    image: blog1,
  },
  {
    title:
      "Protecting Businesses from Cyber Threats: Next gen Solution’s Approach to Modern Cybersecurity",
    content:
      "Discuss Next gen Solution’s cybersecurity solutions, highlighting advanced threat detection, machine learning in threat analysis, and proactive defense strategies that businesses can adopt to secure their data in an increasingly digital landscape.",
    image: blog2,
  },
  {
    title:
      "Building Smart Cities with IoT: Next gen Solution’s Vision for Sustainable Urban Development",
    content:
      "This blog post dives into how Next gen Solution is leveraging IoT to enable smart city infrastructure. Discuss IoT’s role in making cities more efficient, sustainable, and data-centric, with examples of how Next gen Solution’s solutions have been implemented in urban development projects.",
    image: blog3,
  },
];

export const clientsReviews = [
  {
    content:
      "Next gen Solution transformed our outdated systems into a seamless, secure infrastructure. Their team is exceptionally skilled and always available to assist.",
    name: "Malik Jamal",
    jobTitle: "IT Manager, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "Next gen Solution’s cloud solutions have boosted our productivity significantly. I can’t recommend their services enough!",
    name: "Muhammad Zahid",
    jobTitle: "Operations Manager, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "Our cybersecurity has never been stronger. Next gen Solution identified vulnerabilities we didn’t know existed and resolved them efficiently.",
    name: "Shoaib Khan",
    jobTitle: "CTO, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      "Next gen Solution provided scalable solutions that have supported our rapid growth. Their ongoing support ensures we’re always ahead.",
    name: "Saleem Khan",
    jobTitle: "Founder, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Digital Marketing Services",
        id: "",
      },
      {
        title: "Custom Website Development",
        id: "",
      },
      {
        title: "Application Development Services",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
