import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 sm:my-8">
      <h2 className="font-bold text-8xl w-full text-center mb-16 md:text-6xl xs:text-4xl md:mt-20 sm:mt-8 sm:mb-8">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]  md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            position="Web Development Intern"
            company="Softrica"
            companyLink="https://www.softrica.com/"
            time="May 2024 - July 2024"
            address="Surat, Gujarat 394518"
            work="Managed more than 7+ client projects using WordPress technology, showcasing experience in creating customized and responsive websites that meet diverse client needs."
          />

          <Details
            position="React.JS Intern"
            company="Logicwind"
            companyLink="https://www.logicwind.com"
            time="December 2024 - Present"
            address="Surat, Gujarat 395007"
            work="Developed and maintained Instaplug’s Analytics Module using React.js and Chart.js to enable detailed tracking of user interactions, unique visitors, device types, and demographics, while also building the Shoppable Feed Module for tagging products directly on Instagram posts within embedded widgets. Engineered a custom, scalable cross-domain tracking system without third-party analytics, ensuring high accuracy across multiple domains. Additionally, contributed to enhancing real-time visitor tracking and marketing insights in the frontend analytics module for URLTags."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
