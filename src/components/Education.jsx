import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 sm:my-8">
      <h2 className="font-bold text-8xl  mb-16 md:text-6xl xs:text-4xl sm:mt-8 sm:mb-8  md:mt-20 w-full text-center">
        Education
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%]  md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            type="Higher Secondary"
            time="2019-2021 "
            place="Shri H. M. Bachkaniwala Sardar English High School, Surat, Gujarat"
            info=""
          />
          <Details
            type="B-Tech In Information Technology"
            time="2021-2025"
            place="UKA TARSADIA UNIVERSITY, Bardoli, Gujarat"
            info="Currently Persuing Bachelor Degreen in Information Technology, Currently In 6th Sem, Got CGPA - 8.71(till 5th Sem)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
